export const registedDate = () =>
	new Date().toISOString().substring(0, 16).replace('T', ' ');
