import { transformSession } from '../transformers';

export const getSession = async (hash) => {
	const url = `http://localhost:3005/sessions?hash=${hash}`;
	const response = await fetch(url);
	const data = await response.json();
	const session = data[0];
	return session && transformSession(session);
};
