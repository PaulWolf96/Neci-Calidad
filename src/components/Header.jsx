import NavGender from './NavGender';
import FormMovies from './FormMovies';
import '../styles/header.css';

const Header = () => {
	return (
		<header>
			<h1>Neci-Calidad</h1>
			<div className='div-header'>
				<NavGender />
				<FormMovies />
			</div>
		</header>
	);
}

export default Header;