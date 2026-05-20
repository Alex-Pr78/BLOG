import { addComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER];
	console.log('До проверки addPostComment', userId, postId, content);

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	console.log('после проверки addPostComment', userId, postId, content);
	await addComment(userId, postId, content);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
