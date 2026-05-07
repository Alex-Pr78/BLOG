import { useState, useEffect } from 'react';
import { useServerRequest } from '../../hooks';
import { H2 } from '../../components';
import { Content } from '../../components';
import { UserRow } from './components/user-row';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes);
				setRoles(rolesRes);
			},
		);

		requestServer('fetchRoles').then(({ rolesError, res }) => {
			if (rolesError) {
				return;
			}
			setRoles(res);
		});
		requestServer('fetchUsers');
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div className="table-users">
					<div className="table-title">
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</div>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	border: 1px solid #000;
	width: 570px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;

	& .table-users {
		width: 100%;
		display: flex;
		border: 1px solid red;
	}

	& .table-title {
		width: 100%;
		padding-left: 20px;
		padding-right: 100px;
		padding-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}



}

`;
