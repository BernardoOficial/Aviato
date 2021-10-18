import { Container } from '../UI'
import { StyledHeader, ContainerLogo, Menu } from './style';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg';

const Header = () => (
	<StyledHeader>

		<Container>

			<ContainerLogo>

				<div className="header__telephone" title="me ligue para mais informações">
					<BsFillTelephoneFill />
					<a href="tel:1199999-2222">(11) 99999-2222</a>
				</div>

				<div className="header__logo">
					<a translate="no" title="aviato">aviato</a>
				</div>

				<div className="header__cart">
					<button type="button" title="abrir minicart">
						<CgShoppingCart />
					</button>
					<span className="header__cart--quantity">(0)</span> -
					<span className="header__cart--value">R$ 0.00</span>
				</div>

			</ContainerLogo>

			<Menu>
				<ul>
					<li>
						<a href="#" target="_self" title="home" className="active">home</a>
					</li>
					<li>
						<a href="#" target="_self" title="camisas">camisas</a>
					</li>
					<li>
						<a href="#" target="_self" title="blusas">blusas</a>
					</li>
					<li>
						<a href="#" target="_self" title="calças">calças</a>
					</li>
					<li>
						<a href="#" target="_self" title="acessórios">acessórios</a>
					</li>
					<li>
						<a href="#" target="_self" title="outlet" className="outlet">outlet</a>
					</li>
				</ul>
			</Menu>

		</Container>

	</StyledHeader>
);

export default Header;
