import styled from 'styled-components';

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}` } aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '33px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ color = '#000' }) => color};
	transition: color 0.3s ease-in-out;

	&:hover {
		cursor: pointer;
		color: ${({ hovercolor = '#2864a0' }) => hovercolor};
}
`;
