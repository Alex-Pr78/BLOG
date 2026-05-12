import { transformRole } from '../transformers';

export const getRoles = () =>
	fetch('http://localhost:3005/roles')
		.then((loadedRoles) => loadedRoles.json())
		.then((loadedRoles) => loadedRoles && loadedRoles.map(transformRole));
