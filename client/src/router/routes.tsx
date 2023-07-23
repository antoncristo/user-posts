import { type IRoute } from './routes.type';
import { Home, Posts } from '../components';

export const routes: IRoute[] = [
	{
		path: '/',
		index: true,
		component: <Home />
	},
	{
		path: '/posts/:id',
		index: false,
		component: <Posts />
	},
	{
		path: '*',
		index: false,
		component: <div>404 NOT FOUND</div>
	}
];
