import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	font-size: 24px;
	font-weight: bold;
`;

export const App = () => {
	return (
		<div>
			<Div>
				<i className="fa fa-camera-retro"></i>
				Hello
			</Div>
		</div>
	);
};
