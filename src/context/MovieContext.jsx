import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";



const MovieContext = createContext();


export const MovieProvider = ({children}) => {
  const [listMovies, setListMovies] = useState([]);
  const [infoMovie, setInfoMovie] = useState(JSON.parse(localStorage.getItem('infoMovie')));
  const [query, setQuery] = useState('');
  const [listMoviesSearch, setListMoviesSearch] = useState([]);
  const navigate = useNavigate();


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
    navigate('/movie');
  }


  

  return (
    <MovieContext.Provider value={{listMovies, setListMovies, selectMovie, infoMovie, query, setQuery, listMoviesSearch, setListMoviesSearch}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;