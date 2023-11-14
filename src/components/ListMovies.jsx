import { useState, useContext } from "react";
import '../styles/listMovies.css';
import StateContext from "../context/StateContext";
import MovieContext from "../context/MovieContext";



const ListMovies = () => {

  const [movies, setMovies] = useState([]);

  const {state} = useContext(StateContext);

  const {selectMovie} = useContext(MovieContext);

  
    const fetchData = async () => {
      try {
        const response = await fetch(state.endpointApi);
        const data = await response.json();
        await setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();

    

    


  return (
    <main>
      <h1>Lista de películas</h1>
      <div className="div-list-movies">
        {movies.map(movie =>
          <div className="div-card-movie" key={movie.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              onClick={(e) => selectMovie(e, movie) }
              alt={movie.title} />
          </div>
        )}
      </div>
    </main>
  );
}

export default ListMovies;