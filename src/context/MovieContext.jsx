import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const MovieContext = createContext();


export const MovieProvider = ({children}) => {
  const [listMovies, setListMovies] = useState([]);

  //Estado que guarda los detalles de la película seleccionada
  //Inicialmente tiene el valor de la key "infoMovie" en el localStorage
  //Para que persista el estado en caso de refresh de la página
  const [infoMovie, setInfoMovie] = useState(JSON.parse(localStorage.getItem('infoMovie')));

  //Estado que guarda lo que el usuario tipea cuando busca una película.
  const [query, setQuery] = useState('');

  //Estado que guarda el resultado de las películas encontradas 
  //cuando el usuario hace una busqueda.
  const [listMoviesSearch, setListMoviesSearch] = useState([]);
  const navigate = useNavigate();

  //Funcion que captura la película seleccionada por el usuario 
  //y la guarda en el estado y en el localStorage 
  //(para que no se pierda  en caso de un refresh de la página).
  //También redirecciona a "/movie" a traves del useNavigate.
  const selectMovie = (e, movie) => {
    e.preventDefault();
    const selectedMovie = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview
    }
    setInfoMovie(selectedMovie);
    localStorage.setItem('infoMovie', JSON.stringify(selectedMovie));
    setQuery('');
    navigate('/movie');
  }


  

  return (
    <MovieContext.Provider value={{listMovies, setListMovies, selectMovie, infoMovie, query, setQuery, listMoviesSearch, setListMoviesSearch}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;