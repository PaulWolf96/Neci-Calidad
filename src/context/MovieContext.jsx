import { createContext, useState} from "react";
//import { useNavigate } from "react-router-dom";

const MovieContext = createContext();



export const MovieProvider = ({children}) => {

  const [infoMovie, setInfoMovie] = useState({});
  //const navigate = useNavigate();

  const selectMovie = (e, movie) => {
    e.preventDefault();
    console.log(movie);
    setInfoMovie(movie);
    //navigate()
  }
  

  return (
    <MovieContext.Provider value={{selectMovie, infoMovie}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;