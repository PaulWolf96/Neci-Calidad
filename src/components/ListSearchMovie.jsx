import { useContext, useEffect} from "react";
import MovieContext from "../context/MovieContext";

const ListSearchMovie = () => {
  const {query, selectMovie, listMoviesSearch, setListMoviesSearch} = useContext(MovieContext);

  const API_KEY = '52a625a829f55a42813acab1b8e140d2';

  useEffect(() => {
    const fetchdataSearch = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        if (!response.ok) {
          throw new Error('Error al realizar la búsqueda');
        }
        const data = await response.json();
        setListMoviesSearch(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchdataSearch();
  }, [query, setListMoviesSearch])

  return (
    <main>
      <div className="div-list-movies">
        {listMoviesSearch.map(movie =>
          <div className="div-card-movie" key={movie.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              onClick={(e) => selectMovie(e, movie)}
              alt={movie.title} 
              title={movie.title} />
          </div>
        )}
      </div>
    </main>
  );
}

export default ListSearchMovie;