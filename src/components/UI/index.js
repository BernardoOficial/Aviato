import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: ${props => props.maxWidth ? props.maxWidth : "1110px" };
	height: auto;
	margin: 0 auto;
	display: block;
	background-color: #ffffff;
`;

export {
	Container
};
