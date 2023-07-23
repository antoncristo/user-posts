import { type IRoute } from './routes.type';
import { Home } from '../components';

export const routes: IRoute[] = [
	{
		path: '/',
		index: true,
		component: <Home />
	},
	{
		path: '/posts/:id',
		index: false,
		component: <div>posts</div>
	},
	{
		path: '*',
		index: false,
		component: <div>404 NOT FOUND</div>
	}
];
