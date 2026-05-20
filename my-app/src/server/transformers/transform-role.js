export const transformRole = (dbRole) => ({
	id: Number(dbRole.id),
	name: dbRole.name,
});
