import { Day } from 'api-server/server/types/apiData';
import { Button, Card } from 'flowbite-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Entry } from '../../Components/Entry/Entry';
import { BackIcon } from '../../Icons/Back';
import { trpc } from '../../trpc/trpc';

const Hours = ({day, openingHours}: {day: string, openingHours: Day[]}) => {
	return (
		<div key={day} className='flex flex-row justify-between grow-1'>
			<div className='capitalize'>{day}</div>
			<div className='flex flex-col'>
				{openingHours.map(hours => {
					return hours.type === 'OPEN' 
						? <span>{`${hours.start} - ${hours.end}`}</span>
						: <span>Closed</span>;
				})}
			</div>
		</div>);
};

export const DetailsCard = () => {
	const navigate = useNavigate();
	const { itemId } = useParams();
	const { data: item} = trpc.business.useQuery({id: itemId || ''});

	return (
		<Card className='p-6'>
			<div className='flex justify-between'>
				<h1>{ item?.name }</h1>
				<Button color='gray' size='md' onClick={() => navigate('/search')}>
					<BackIcon width={16} height={16} className='mr-2' />
					Back
				</Button>
			</div>
			<div className='grid grid-cols-2 gap-24 pt-2'>
				<div>
					<Entry header='Address' content={item?.address} />
					<Entry header='Website' content={item?.contacts.url} />
					<Entry header='Phone' content={
						item?.contacts.phones.map((phoneNumber) => (
							<div key={phoneNumber}>
								{phoneNumber}
							</div>
						))
					} />
				</div>
				<div>
					<Entry header='Opening Hours' content={
						item && Object.keys(item?.openingHours)
							.map((day) => <Hours key={day} day={day} openingHours={item?.openingHours[day]} />)
					} />
				</div>
			</div>
		</Card>
	);
};