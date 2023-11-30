import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/aside.css';


const Aside = () => {
	const {modeDark, setModeDark} = useContext(ThemeContext);

	return (
		<aside>
			<section className="section-dark-mode">
				<label htmlFor="switchMode">{`Modo ${modeDark ? 'Noche' : 'Día' }`}</label>
				<input type="checkbox" id='switchMode' checked={modeDark} onChange={() => setModeDark(!modeDark)}/> 
			</section>
			<span className='span-aside'>Unirme al grupo de Telegram</span>
			<section>
				<h2>Películas de Calidad</h2>
				<p>En Cinecalidad hay películas online en excelente calidad Bluray 4K 2160p, Full HD 1080p, audio latino, gratis, sin registro y toda la información.</p>
			</section>
			<section>
				<h2>Destacadas</h2>
			</section>
			<br />
			<section>
				<h2>Año de Estreno</h2>
			</section>
			<br />
			<section>
				<h2>Herramientas de Cinecalidad</h2>
			</section>
		</aside>
	);
}

export default Aside;