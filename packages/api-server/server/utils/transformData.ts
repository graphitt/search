import { isEqual, isEqualWith } from "lodash"
import { Contact, Day, DayNames, Days, ResponseData } from "../types/apiData"
import { ContactsData } from "../types/data"

const substituteWith = (str: string, index: number, char: string): string =>
	str.substring(0,index) + char + str.substring(index+1)

export const areTheSame = (first: Day[], second: Day[]) => 
	isEqualWith(first, second, isEqual)

export const tranformContacts = (contacts: Contact[]) => 
	contacts
		.reduce((prev: ContactsData, curr: Contact) => 
			curr.contact_type === "phone"
				? {...prev, phones: [...prev.phones, substituteWith(curr.formatted_service_code, 0, '+')]}
				: {...prev, url: curr.url}
		, { phones: [] });

const overrideKeyName = (agg: any, currentDayName: string) => {
	const combinedName = `${agg.lastDayName.split(' - ')[0]} - ${currentDayName}`;
	delete Object.assign(agg, { [combinedName]: agg[agg.lastDayName]})[agg.lastDayName];
	return {...agg, lastDayName: combinedName}
}

const closedStatus: Day[] = [{ type: 'CLOSED' }];

export const transformOpeningDays = (days: Days) => {
	const dayNames = ["tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

	const combined: {lastDayName?: DayNames} = dayNames.reduce((agg , currentDay) => {
			const currentDayData = days[currentDay as DayNames];
			return !!currentDayData && areTheSame(currentDayData, agg[agg.lastDayName])
				? overrideKeyName(agg, currentDay)
				: {...agg, [currentDay]: currentDayData || closedStatus, lastDayName: currentDay }
	}, {lastDayName: 'monday', monday: days['monday'] || closedStatus});

	delete combined['lastDayName']
	return combined as Record<string, Day[]>;
}

export interface TransformedData {
	id: string;
	name: string;
	address: string;
	openingHours: Record<string, Day[]>;
	contacts: {
		phones: string[];
		url?: string;
	}
}

export const transformData = (data: ResponseData): TransformedData => {
	return {
		id: data.local_entry_id,
		name: data.displayed_what,
		address: data.displayed_where,
		openingHours: transformOpeningDays(data.opening_hours.days),
		contacts: tranformContacts(data.addresses[0].contacts)
	}
}