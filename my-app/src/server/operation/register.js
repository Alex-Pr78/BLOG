import { sessions } from '../sessions';
import { addUser, getUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existingUser = await getUser(regLogin);

	if (existingUser) {
		return {
			error: 'Такой логин уже существует',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
