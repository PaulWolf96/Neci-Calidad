import { useContext } from "react";
import '../styles/listMovies.css';
import MovieContext from "../context/MovieContext";



const ListMovies = ({ endpoint }) => {
  const {listMovies, setListMovies, selectMovie} = useContext(MovieContext);
  

  const fetchData = async () => {
    try {
      ///////////////////////TRAIGO LAS PELICULAS MAS RECIENTES O POR GENERO //////////////////////////////
      //LA PROP "ENDPOINT" MANEJA QUE TIPO DE PELICULA TRAE (INICIALMENTE TRAE LAS PELICULAS MAS RECIENTES)
      const response = await fetch(endpoint);
      const data = await response.json();
      //Guardo en el estado el resultado de las películas devueltas por la API
      await setListMovies(data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  
  fetchData();
  

  return (
    <main>
      <div className="div-list-movies">
        {/* Renderizo las películas devueltas por la API */}
        {listMovies.map(movie =>
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

export default ListMovies;