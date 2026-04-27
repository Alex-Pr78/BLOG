import {removeComment} from './session';
import {ROLE} from '../constants'

export const createSession = (roleId) => {
	const session = {
		logout() {
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
				console.log('Выход из системы');
			},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.USER: {
			break;
		}
		default: 
		// Ничего не делать
	}

	return session;
}