import { useDispatch } from 'react-redux';
import { Icon } from '../../../components';
// import { ROLE } from '../../../constants';
import styled from 'styled-components';

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
}) => {
	const dispatch = useDispatch();

	const onRowChange = () => {};

	return (
		<div className={className}>
			<div className="user-data">
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>

				<div className="role-column">
					<select
						className="role-select"
						value={userRoleId ?? ''}
						onChange={onRowChange}
					>
						{roles?.length > 0 ? (
							roles.map(({ id: roleId, name: roleName }) => (
								<option key={roleId} value={roleId}>
									{roleName}
								</option>
							))
						) : (
							<option value="" disabled>
								Нет ролей
							</option>
						)}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						onClick={() => dispatch(/* TODO */)}
					/>
				</div>
				<Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
					onClick={() => dispatch(/* TODO */)}
				/>
			</div>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	& .user-data {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 10px 0;
	}

	& .role-column {
		display: flex;
		align-items: center;

		& .role-select {
			width: 70px;
		}
	}
`;
