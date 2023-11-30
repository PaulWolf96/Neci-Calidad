import { useContext } from 'react';
import '../styles/header.css';
import { HiMenu } from 'react-icons/hi';
import MovieContext from '../context/MovieContext';


const Nav = () => {
  //Variables de estado traidas del contexto (guarda lo que tipea el usuario en el inputSearch)
  const {query, setQuery} = useContext(MovieContext);

  return (
    <nav>
      <ul>
        <li className="li-gender">
          <a className="a-gender" href="/genre/action">Accion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/crime">Crimen</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/comedy">Comedia</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/sciencefiction">Ciencia ficcion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/adventure">Aventura</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/animation">Animacion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/horror">Terror</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/thriller">Suspenso</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/romance">Romance</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="/genre/family">Familiar</a>
        </li>
      </ul>
      <button className='button-menu'><HiMenu />Menú</button>
      <div className='div-input'>
        <input type="text" placeholder="Buscar..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <br />
      </div>
    </nav>
  );
}

export default Nav;