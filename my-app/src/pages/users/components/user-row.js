import { useDispatch } from 'react-redux';
import { Icon } from '../../../components';
// import { ROLE } from '../../../constants';
import styled from 'styled-components';

const UserRowContainer = ({ className, login, registeredAt, roleId: userRoleId }) => {
	const dispatch = useDispatch();
	const roles = [];
	const onRowChange = () => {};

	return (
		<div className={className}>
						<div className="user-data">
							<div className="login-column">{login}</div>
							<div className="registered-at-column">{registeredAt}</div>

							<div className="role-column">
								<select value={userRoleId} onChange={onRowChange}>
									{roles.map(({ id: roleId, name: roleName }) => (
										<option value={roleId}>{roleName}</option>
									))}
								</select>
								<Icon
									id="fa-floppy-o"
									margin="0 0 0 10px"
									onClick={() => dispatch(/* TODO */)}
								/>
							</div>
						</div>
						<Icon
							id="fa-trash-o"
							margin="0 0 0 10px"
							onClick={() => dispatch(/* TODO */)}
						/>
					</div>
	)
}

export const UserRow = styled(UserRowContainer)``;
