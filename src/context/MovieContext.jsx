import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";



const MovieContext = createContext();


export const MovieProvider = ({children}) => {
  const [infoMovie, setInfoMovie] = useState();
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
    navigate('/movie');
  }
  

  return (
    <MovieContext.Provider value={{infoMovie, selectMovie}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;