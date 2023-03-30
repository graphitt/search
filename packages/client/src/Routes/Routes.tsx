import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { AppContent } from '../AppContent';
import { DetailsCard } from '../Containers/DetailsCard/DetailsCard';
import { SearchCard } from '../Containers/SearchCard/SearchCard';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<AppContent />}>
			<Route path='/search' index element={<SearchCard />} />
			<Route path='/item/:itemId' element={<DetailsCard />} />
			<Route path='' element={<Navigate to='/search' />} />
		</Route>
	)
);