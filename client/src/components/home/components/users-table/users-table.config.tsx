import { TextField, type Column } from '@antoncristo/react-ev';
import { type IUser } from '../../../../types';

export const usersColumns: Array<Column<IUser>> = [
	{
		columnId: 'name',
		header: 'NAME',
		cell: {
			init: (user: IUser) => (
				<TextField key={user.name} lineHeight='22px' fontWeight='bold'>
					{user.name}
				</TextField>
			)
		},
		width: '40%',
		maxWidth: '320px',
		isSortable: true
	},
	{
		columnId: 'email',
		header: 'EMAIL',
		cell: {
			init: (user: IUser) => (
				<TextField
					style={{ textDecoration: 'underline' }}
					key={user.email}
					lineHeight='22px'
				>
					{user.email}
				</TextField>
			)
		},
		width: '40%',
		isSortable: false
	},
	{
		columnId: 'address',
		header: 'ADDRESS',
		cell: {
			init: (user: IUser) => (
				<TextField
					key={user.address.zipcode}
					maxWidth='50px'
					numberOfLines={1}
					lineHeight='22px'
					title={`${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`}
				>{`${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`}</TextField>
			)
		},
		width: '20%',
		isSortable: false
	}
];
