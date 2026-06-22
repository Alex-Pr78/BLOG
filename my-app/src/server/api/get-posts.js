import { transformPost } from '../transformers';

export const getPosts = (searchPhrase) =>
	fetch(`http://localhost:3005/posts`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => {
			const posts = (loadedPosts && loadedPosts.map(transformPost)) || [];
			if (searchPhrase) {
				return posts.filter((post) =>
					post.title.toLowerCase().includes(searchPhrase.toLowerCase()),
				);
			}
			return posts;
		});
