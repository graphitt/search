import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './trpc/trpc';
import { httpBatchLink } from '@trpc/react-query';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import './index.scss';

const App = () => {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() => trpc.createClient({
		links: [
			httpBatchLink({
				url: 'http://localhost:8080/trpc'
			})
		]
	}));

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</trpc.Provider>
	);
};

const container = document.getElementById('app') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(<App />);