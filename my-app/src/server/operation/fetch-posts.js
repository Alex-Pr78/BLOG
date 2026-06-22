import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (searchPhrase, page = 1, limit = 9) => {
	const [posts, comments] = await Promise.all([getPosts(searchPhrase), getComments()]);

	const allPosts = posts.map((post) => ({
		...post,
		commentsCount: getCommentsCount(comments, post.id),
	}));

	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;

	const paginatedPosts = allPosts.slice(startIndex, endIndex);

	return {
		error: null,
		res: paginatedPosts,
		totalPages: Math.ceil(allPosts.length / limit),
	};
};
