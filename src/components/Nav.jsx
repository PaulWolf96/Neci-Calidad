import '../styles/header.css';
import { HiMenu } from 'react-icons/hi';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="li-gender">
          <a className="a-gender" href="#">Accion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Crimen</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Comedia</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Ciencia ficcion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Aventura</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Animacion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Terror</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Suspenso</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Romance</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#">Familiar</a>
        </li>
      </ul>
      <button className='button-menu'><HiMenu />Menú</button>
      <div className='div-input'>
        <input type="text" placeholder="Buscar..." />
        <br />
      </div>
    </nav>
  );
}

export default Nav;