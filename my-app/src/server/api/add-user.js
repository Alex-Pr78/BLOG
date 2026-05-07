import { registeredDate } from '../utils';

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: registeredDate(),
			role_id: 2,
		}),
	}).then((createUser) => createUser.json());
