import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 100%;
	height: auto;
	display: block;
	background-color: #ffffff;
	padding: 35px 58px;
	text-align: center;
`;

const ContainerLogo = styled.div`
	width: 100%;
	color: #333333;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 75px;

	.header__telephone {

		& > svg {
			color: #000000;
			vertical-align: middle;
			margin-right: 10px;
		}

		a {
		   font-size: 14px;
		   text-transform: uppercase;
		   text-align: left;
	   	}
	}

	.header__logo a {
		display: inline-block;
		font-size: 24px;
		text-transform: uppercase;
		text-align: center;
		cursor: pointer;
	}

	.header__cart {
		font-size: 14px;
		text-transform: uppercase;
		display: flex;
		align-items: center;

		button {
			border: none;
			font-size: 0;
			cursor: pointer;

			& > svg {
				width: 20px;
				height: auto;
			}
		}

		&--quantity {
			margin-right: 5px;
		}

		&--value {
			margin-left: 5px;
			font-weight: bold;
			color: #000000;
		}
	}
`;

const Menu = styled.nav`
	text-align: center;

	ul li {
		display: inline-block;
		margin: 0 24px;
	}

	ul li a {
		display: inline-block;
		font-size: 14px;
		color: #333333;
		text-transform: uppercase;
		font-weight: 400;
		padding: 5px;

		&.outlet {
			color: #F90000;
		}

		&.active {
			font-weight: bold;
			color: #000000;
		}
	}
`;

export {
	StyledHeader,
	ContainerLogo,
	Menu
};
