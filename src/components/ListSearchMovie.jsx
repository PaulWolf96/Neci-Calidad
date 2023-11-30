import { useContext, useEffect} from "react";
import MovieContext from "../context/MovieContext";

const ListSearchMovie = () => {
  //La variable de estado "query" viene del MovieContext y 
  //guarda lo que el usuario tipea en el input del componente NAV.
  const {query, selectMovie, listMoviesSearch, setListMoviesSearch} = useContext(MovieContext);

  const API_KEY = '52a625a829f55a42813acab1b8e140d2';

  useEffect(() => {
    const fetchdataSearch = async () => {
      try {
        ////////////////////////TRAIGO LOS RESULTADOS DE LA BUSQUEDA//////////////////////////
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        if (!response.ok) {
          throw new Error('Error al realizar la búsqueda');
        }
        const data = await response.json();
        //Guardo en el estado el resultados de las películas que se encontraron
        setListMoviesSearch(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
  //La funcion fetchDataSearch se ejecuta cada que vez que 
  //cambia la variable de estado "query" (cuando el usuario tipea en el input Search)
    fetchdataSearch();
  }, [query, setListMoviesSearch])

  return (
    <main>
      <div className="div-list-movies">
        {/* Renderizo las películas que se encontraron */}
        {listMoviesSearch.map(movie =>
          <div className="div-card-movie" key={movie.id}>
            {/* La función "selectMovie" viene del MovieContext */}
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