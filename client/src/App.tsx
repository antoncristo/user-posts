import { Layout } from './layout';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactEVThemeProvider } from '@antoncristo/react-ev';

import { routes } from './router';

import './App.css';

export const App = () => {
	const queryClient = new QueryClient();

	return (
		<ReactEVThemeProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Layout>
						<Routes>
							{routes.map(route => (
								<Route
									key={route.path}
									path={route.path}
									index={route.index}
									element={route.component}
								/>
							))}
						</Routes>
					</Layout>
				</BrowserRouter>
			</QueryClientProvider>
		</ReactEVThemeProvider>
	);
};
