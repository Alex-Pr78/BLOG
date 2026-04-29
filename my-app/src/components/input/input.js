import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref}/>;
});

export const Input = styled(InputContainer)`
	padding: 10px;
	width: ${({ width = '100%' }) => width};
	border: 2px solid #000;
	border-radius: 5px;
	height: 40px;
	font-size: 18px;
`;
