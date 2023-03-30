import React from 'react'; 
import { Outlet } from 'react-router-dom';

export const AppContent = () => {	
	return (
		<div className="mt-10 text-3xl mx-auto max-w-6xl">
			<Outlet />
		</div>
	);
};