import { TransformedData } from 'api-server/server/utils/transformData';
import { Button, Card } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ResultCard = ({item}: { item: TransformedData}) => {
	const [address, postCode] = item.address.split(', ');
	const navigate = useNavigate();
	return (
		<Card>
			<div className='flex flex-row justify-between items-stretch'>
				<div className='flex flex-col gap-8'>
					<span className='text-lg'>{item.name}</span>
					<div>
						<div className='text-lg'>{address}</div>
						<div className='text-lg'>{postCode}</div>
					</div>
				</div>
				<Button 
					onClick={() => navigate(`/item/${item.id}`)} 
					color='success' 
					className='w-40 self-center'
				>
					Details
				</Button>
			</div>
		</Card>
	);
};