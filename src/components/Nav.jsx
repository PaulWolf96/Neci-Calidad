import '../styles/header.css';
import { HiMenu } from 'react-icons/hi';
import { useContext } from 'react';
import StateContext from '../context/StateContext';


const Nav = () => {

  const {dispatch} = useContext(StateContext);

  return (
    <nav>
      <ul>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'ACTION' })}>Accion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'CRIME' })}>Crimen</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'COMEDY' })}>Comedia</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'SCIENCE FICTION' })}>Ciencia ficcion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'ADVENTURE' })}>Aventura</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'ANIMATION' })}>Animacion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'HORROR' })}>Terror</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'THRILLER' })}>Suspenso</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'ROMANCE' })}>Romance</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href="#" onClick={() => dispatch({type: 'FAMILY' })}>Familiar</a>
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