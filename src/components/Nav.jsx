import '../styles/header.css';
import { HiMenu } from 'react-icons/hi';
import { useContext } from 'react';
import ApiContext from '../context/ApiContext';


const Nav = () => {

  const {state, dispatch} = useContext(ApiContext);

  return (
    <nav>
      <ul>
        <li className="li-gender">
          <a className="a-gender" href={state.route} onClick={() => dispatch({type: 'ACTION' })}>Accion</a>
        </li>
        <li className="li-gender">
          <a className="a-gender" href={state.route} onClick={() => dispatch({type: 'CRIME' })}>Crimen</a>
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