import { H2 } from "../components/h2/h2";
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	color: red;
	font-size: 20px;
	align-items: center;
`;

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка!</H2>
			<div>{error}</div>
		</Div>
	);
