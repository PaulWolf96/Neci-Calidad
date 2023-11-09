import Nav from './Nav';
import '../styles/header.css';

const Header = () => {
	return (
		<header>
			<img src="https://cinecalidad.com.mx/wp-content/themes/cinecalidad-react/assets/build/static/media/logo.ae7f2b17ae0afe91f86d8a37477fd75b.svg" alt="Logo Neci Calidad" />
			<div className='div-header'>
				<Nav />
			</div>
		</header>
	);
}

export default Header;