import { multiple_contacts, single_contacts } from '../__mocks/mockedData'
import { transformOpeningDays, tranformContacts, transformData } from './transformData';

describe('transform data tests', () => {
	describe('transform contact informations', () => {
		it('should return list of available phone numbers as array', () => {
			const result = tranformContacts(multiple_contacts.addresses[0].contacts);
			expect (result).toEqual({
				phones: [
					"+44 362 35 09",
					"+44 362 35 23",
					"+44 362 35 34"
				],
				url: "http://www.casaferlin.ch"
			})
		})
	})

	describe('transform opening hours', () => {
		it('should return days with the same opening hours', () => {
			const result = transformOpeningDays(multiple_contacts.opening_hours.days);
			expect(result).toEqual({
				"monday - friday" : [{
					"start" : "11:30",
					"end" : "14:00",
					"type" : "OPEN"
				}, {
					"start" : "18:30",
					"end" : "22:00",
					"type" : "OPEN"
				}],
				"saturday": [{ type: "CLOSED" }],
				"sunday": [{ type: "CLOSED" }]
			})
		})

		it('should return days with the same opening hours for another data set', () => {
			const result = transformOpeningDays(single_contacts.opening_hours.days);
			expect(result).toEqual({
				"monday": [{ type: "CLOSED" }],
				"tuesday - friday" : [{
					"start" : "11:30",
					"end" : "15:00",
					"type" : "OPEN"
				}, {
					"start" : "18:30",
					"end" : "00:00",
					"type" : "OPEN"
				}],
				"saturday":  [{
					"start" : "18:00",
					"end" : "00:00",
					"type" : "OPEN"
				}],
				"sunday": [{
					"start" : "11:30",
					"end" : "15:00",
					"type" : "OPEN"
				}]
			})
		})
	})

	describe('transform data for frontend', () => {
		const result = transformData(multiple_contacts);
		expect(result).toEqual({
			id: "GXvPAor1ifNfpF0U5PTG0w",
			address: "Stampfenbachstrasse 38, 8006 Zürich",
			contacts: {
				phones: [
					"+44 362 35 09",
					"+44 362 35 23",
					"+44 362 35 34",
				],
				url: "http://www.casaferlin.ch",
			},
			name: "Casa Ferlin",
			openingHours: {
				"monday - friday": [
					{
						end: "14:00",
						start: "11:30",
						type: "OPEN",
					},
					{
						end: "22:00",
						start: "18:30",
						type: "OPEN",
					},
				],
				saturday: [{ type: "CLOSED" }],
				sunday: [{ type: "CLOSED" }],
			},
		})
	})
})

