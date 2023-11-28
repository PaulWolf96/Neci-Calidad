import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/aside.css';


const Aside = () => {

const {modeDark, setModeDark} = useContext(ThemeContext);

	return (
		<aside>
			<section className="section-dark-mode">
				<label for="switchMode">Modo Noche</label>
				<input type="checkbox" id='switchMode' value={modeDark} onChange={() => setModeDark(!modeDark)}/> 
			</section>
			<br />
			<section>
				<h4>Películas de Calidad</h4>
				<p>En Cinecalidad hay películas online en excelente calidad Bluray 4K 2160p, Full HD 1080p, audio latino, gratis, sin registro y toda la información.</p>
			</section>
			<br />
			<section>
				<h4>Destacadas</h4>
			</section>
			<br />
			<section>
				<h4>Año de Estreno</h4>
			</section>
		</aside>
	);
}

export default Aside;