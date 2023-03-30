import { Card } from 'flowbite-react';
import { ChangeEvent } from 'react';
import { ResultCards } from '../../Components/ResultList/ResultList';
import { SearchInput } from '../../Components/SearchInput/SearchInput';
import { useFilter } from '../../Hooks/useFilter';
import { trpc } from '../../trpc/trpc';

export const SearchCard = () => {
	const { data: list } = trpc.businessList.useQuery();
	const { setFilter, filtered } = useFilter(list);	
	
	const onChange = (event: ChangeEvent<HTMLInputElement>): void => setFilter(event.currentTarget.value); 

	return (
		<Card>
			<SearchInput onChange={onChange}/>
			<div className='grid grid-flow-col justify-strech'>
				<ResultCards results={filtered} />
			</div>
		</Card>
	);
};
