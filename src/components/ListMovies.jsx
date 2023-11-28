import { useContext, useEffect } from "react";
import '../styles/listMovies.css';
import ApiContext from "../context/ApiContext";
import MovieContext from "../context/MovieContext";



const ListMovies = () => {

  const {listMovies, fetchData} = useContext(ApiContext);
  const {selectMovie} = useContext(MovieContext);

  fetchData();

  return (
    <main>
      <div className="div-list-movies">
        {listMovies.map(movie =>
          <div className="div-card-movie" key={movie.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              onClick={(e) => selectMovie(e, movie)}
              alt={movie.title} />
          </div>
        )}
      </div>
    </main>
  );
}

export default ListMovies;