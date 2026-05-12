export const transformUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	roleId: Number(dbUser.role_id),
	password: dbUser.password,
	registeredAt: dbUser.registered_at || dbUser.registed_at,
});
