import { type IRoute } from './routes.type';

export const routes: IRoute[] = [
	{
		path: '/',
		index: true,
		component: <div>home</div>
	},
	{
		path: '/posts',
		index: false,
		component: <div>posts</div>
	},
	{
		path: '*',
		index: false,
		component: <div>404 NOT FOUND</div>
	}
];
