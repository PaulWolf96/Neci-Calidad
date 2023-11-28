import { useContext } from "react";
import '../styles/listMovies.css';
import ApiContext from "../context/ApiContext";
import MovieContext from "../context/MovieContext";



const ListMovies = ({ endpoint }) => {

  const {listMovies, setListMovies} = useContext(ApiContext);
  const {selectMovie} = useContext(MovieContext);
  

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      await setListMovies(data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

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