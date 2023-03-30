import { filterData } from './filterUtils';

const createData = (name: string, address: string) => ({
	id: '1',
	name, 
	address, 
	contacts: {
		phones: [],
		url: ''
	}, 
	openingHours: {}
});
describe('filter utils test', () => {
	it('should filter array of objects based on properties and filter value', () => {
		const arr = [
			createData('asd', 'qwe'), 
			createData('qwe', 'asd'),
			createData('vbn', 'zxc'),
			createData('jkl', 'iop'),
		];
		const filter = 'asd';
		
		const result = filterData(filter, arr);
		expect(result.length).toBe(2);
	});

	it('should filter array of objects based on properties and filter value without being case sensitive', () => {
		const arr = [
			createData('asd', 'qwe'), 
			createData('qwe', 'asd'),
			createData('vbn', 'zxc'),
			createData('jkl', 'iop'),
		];
		const filter = 'AsD';
		
		const result = filterData(filter, arr);
		expect(result.length).toBe(2);
	});

	it('should return full array when no filter value set', () => {
		const arr = [
			createData('asd', 'qwe'), 
			createData('qwe', 'asd'),
			createData('vbn', 'zxc'),
			createData('jkl', 'iop'),
		];
		const filter = '';
		
		const result = filterData(filter, arr);
		expect(result).toBe(arr);
	});
});