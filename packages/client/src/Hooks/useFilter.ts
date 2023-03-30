import { TransformedData } from 'api-server/server/utils/transformData';
import { useState } from 'react';
import { filterData } from '../utils/filterUtils';

export const useFilter = (data: TransformedData[] | undefined) => {
	const [filter, setFilter] = useState('');
	const filtered = filterData(filter, data || []);

	return {
		setFilter,
		filtered
	};
};