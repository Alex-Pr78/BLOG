import styled from 'styled-components';

const IconContainer = ({ className, id, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}` } aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '33px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled }) => disabled ? '#fff' : '#000'};
	transition: color 0.3s ease-in-out;

	&:hover {
		color: ${({ disabled }) => disabled ? '#fff' : '#2864a0'};
		color: ${({ hover = '#2864a0' }) => hover};
		cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
}
`;
