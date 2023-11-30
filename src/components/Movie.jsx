import '../styles/movie.css';
import LogoInstagram from '../img/instagramLogo.png';
import LogoWp from '../img/whatsappLogo.png';
import { BsFillShareFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import MovieContext from '../context/MovieContext';
import ThemeContext from '../context/ThemeContext';

const Movie = () => {

  //Estado que viene del ThemeContext, guarda el booleano del modo noche.
  const {modeDark} = useContext(ThemeContext);

  //Estado que viene del MovieContext y guarda en un objeto la película seleccionada.
  const {infoMovie} = useContext(MovieContext);

  //Estado que guarda el director de la película seleccionada y los 6 primeros actores.
  const [castMovie, setCastMovie] = useState({
    director: '',
    actors: ''
  });

  //Estado que guarda los géneros de la película seleccionada
  const [genres, setGenres] = useState();


  
    const fetchData = async () => {
      try {
        ///////////////////TRAIGO EL DIRECTOR Y LOS ACTORES DE LA PELICULA/////////////////////////
        const response = await fetch(`https://api.themoviedb.org/3/movie/${infoMovie.id}/credits?api_key=52a625a829f55a42813acab1b8e140d2`);
        const dataCast = await response.json();

        //Obtengo el director de la película
        const director = dataCast.crew.find(crew => crew.job === 'Director');

        //Obtengo los nombres de los primeros 6 actores
        const cast = dataCast.cast.slice(0, 6).map(actor => actor.name);

        //Guardo los datos en el estado
        setCastMovie({
          director: director ? director.name : 'No Disponible', 
          actors: cast ? cast.join(', ') : 'No Disponible'
        });


        ///////////////////TRAIGO LOS GÉNEROS QUE ABARCA LA PELICULA ////////////////////////////
        const res = await fetch(`https://api.themoviedb.org/3/movie/${infoMovie.id}?api_key=52a625a829f55a42813acab1b8e140d2`);
        const dataGenres = await res.json();

        //Obtengo los géneros
        const genres = dataGenres.genres.map(genre => genre.name);

        //Guardo los géneros en el estado, como string separados con una ", "
        setGenres(genres ? genres.join(', ') : 'No Disponible');
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  


  return (
    <>
      <h3> {infoMovie.title} </h3>
      <div className="container-movie">
        <section className="section-img-movie">
          <figure>
            <img src={`https://image.tmdb.org/t/p/w200${infoMovie.poster_path}`} alt="Portada Pelicula" width="405px" height="600px" />
            <figcaption>
              <button>Ver Trailer</button>
            </figcaption>
          </figure>
        </section>

        <section className="section-info-movie">
          <p className="paragraph-synopsis"> {infoMovie.overview} </p>
          <br />
          <span>
            <strong>Titulos:</strong>
            {infoMovie.title}
          </span>
          <span>
            <strong>TMDB:</strong>
          </span>
          <span>
            <strong>Género:</strong>
            {genres}
          </span>
          <span>
            <strong>Audio:</strong>
            Latino e idioma original
          </span>
          <span>
            <strong>Calidad:</strong>
            Blu-Ray HD
          </span>
          <span>
            <strong>Director:</strong>
            {castMovie.director}
          </span>
          <span>
            <strong>Elenco:</strong>
            {castMovie.actors}
          </span>
          <br />
          <div className='div-share-movie'>
            <div className='div-share-icon'>
              <button className={modeDark ? 'button-share-dark': 'button-share'}>
                <BsFillShareFill style={{marginRight: "15px"}}/>
                <span>Compartir</span>
              </button>
            </div>
            <div className='div-share-logos'>
              <a href="/"><img src={LogoInstagram} alt="logo instagram" width="37px" /></a>
              <a href="/"><img src={LogoWp} alt="logo whatsapp" width="37px" /></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Movie;