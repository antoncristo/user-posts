import { Layout } from './layout';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './router';

import './App.css';

export const App = () => (
	<Layout>
		<BrowserRouter>
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
		</BrowserRouter>
	</Layout>
);
