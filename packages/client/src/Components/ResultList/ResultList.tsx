import { TransformedData } from 'api-server/server/utils/transformData';
import { ResultCard } from '../ResultCard/ResultCard';


export const ResultCards = ({
	results,
}: {
  results: TransformedData[] | undefined;
}) => (
	<div className="grid grid-cols-2 gap-8 w-full">
		{results?.map((result) => (
			<ResultCard
				key={result.name}
				item={result}
			/>
		))}
	</div>
);
