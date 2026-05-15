import { useState, useEffect } from 'react';
import { useServerRequest } from '../../hooks';
import { H2 } from '../../components';
import { Content } from '../../components';
import { UserRow } from './components/user-row';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null);

	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList]);

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div className="table-users">
					<div className="table-title">
						<div>Логин</div>
						<div>Дата регистрации</div>
						<div>Роль</div>
					</div>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	width: 570px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;

	& .table-users {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	& .table-title {
		width: 100%;
		padding-left: 20px;
		padding-right: 100px;
		padding-bottom: 10px;
		font-size: 20px;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
