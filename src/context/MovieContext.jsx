import { createContext, useState} from "react";


const MovieContext = createContext();


export const MovieProvider = ({children}) => {
  const [infoMovie, setInfoMovie] = useState();

  

  const selectMovie = (e, movie) => {
    e.preventDefault();
    console.log(movie);
    setInfoMovie(movie);
  }
  

  return (
    <MovieContext.Provider value={{selectMovie, infoMovie, setInfoMovie}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;