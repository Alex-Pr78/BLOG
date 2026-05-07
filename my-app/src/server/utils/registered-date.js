export const registeredDate = () =>
	new Date().toISOString().substring(0, 16).replace('T', ' ');
