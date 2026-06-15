import { registeredDate } from '../utils';

export const addPost = ({ imageUrl, title, content }) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			published_at: registeredDate(),
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((createdPost) => createdPost.json());
