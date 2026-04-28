import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	cursor: pointer;
	color: #000;
	font-size: 14px;
	font-weight: 700;
	padding: 5px 15px;
	border: 2px solid #000;
	border-radius: 5px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: #2864a0;
		border: none;
		color: #fff;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<Wrapper>
				<StyledLink to="/login">Войти</StyledLink>
			</Wrapper>
			<Wrapper>
				<div onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="0 0 0 15px" />
				</div>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="0 0 0 15px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="0 0 0 15px" />
				</Link>
			</Wrapper>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
