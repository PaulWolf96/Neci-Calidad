import Nav from './Nav';
import LogoNeci from '../img/logoNeci.png';
import '../styles/header.css';

const Header = () => {
	return (
		<header>
			<div className='div-logo-neci'>
				<p className='p-header'>Películas en excelente calidad Full HD. <br />
					Audio latino e inglés online. <br />
					1 enlace, 1 clic.</p>
					<a href="/"><img className='logo-neci' src={LogoNeci} width='158px' alt="Logo Neci Calidad" /></a>
				<a href="" className='a-header'>Ir a Cinecalidad España</a>
			</div>
			<div className='div-nav'>
				<Nav />
			</div>
		</header>
	);
}

export default Header;