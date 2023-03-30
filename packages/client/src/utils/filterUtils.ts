import { TransformedData } from 'api-server/server/utils/transformData';

const containsSearched = (filter: string, toCompare: string) =>
	toCompare.toLocaleLowerCase().includes(filter.toLocaleLowerCase());

export const filterData = (filter: string, array: TransformedData[]) => {
	if (filter) {
		return array.filter(
			(item) => 
				containsSearched(filter, item.name) || containsSearched(filter, item.address)
		);
	}
	return array;
};