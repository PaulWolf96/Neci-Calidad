import '../styles/movie.css';
import LogoInstagram from '../img/instagramLogo.png';
import LogoWp from '../img/whatsappLogo.png';
import { BsFillShareFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import MovieContext from '../context/MovieContext';

const Movie = () => {

  const {infoMovie} = useContext(MovieContext);
  const [castMovie, setCastMovie] = useState({
    director: '',
    actors: []
  });
  const [genres, setGenres] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${infoMovie.id}/credits?api_key=52a625a829f55a42813acab1b8e140d2`);
        const dataDirector = await response.json();
        const director = dataDirector.crew.find(crew => crew.job === 'Director');
        const res = await fetch(`https://api.themoviedb.org/3/movie/${infoMovie.id}?api_key=52a625a829f55a42813acab1b8e140d2`);
        const dataElenco = await res.json();
        const genres = dataElenco.genres.map(genre => genre.name);
        setGenres(genres ? genres.join(', ') : 'No Disponible');
        console.log(genres);
        setCastMovie({...castMovie, director: director ? director.name : 'No Disponible' });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [])


  return (
    <>
      <h3> {infoMovie.title} </h3>
      <div className="container-movie">
        <section className="section-img-movie">
          <figure>
            <img src="https://www.smashmexico.com.mx/wp-content/uploads/sites/2/2018/02/09103129/first-movie-poster-released-for-venom-the-trailer-is-coming-tomorrow11-e1518193898324.jpg" alt="Portada Pelicula" width="405px" height="600px" />
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
            {infoMovie.original_title}
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
            Tom Hardy, Michelle Williams, Riz Ahmed, Reid Scott, Scott Haze, Jenny Slate
          </span>
          <br />
          <div className='div-share-movie'>
            <div className='div-share-icon'>
              <button className='button-share'>
                <BsFillShareFill style={{marginRight: "15px"}}/>
                <span>Compartir</span>
              </button>
            </div>
            <div className='div-share-logos'>
              <a href=""><img src={LogoInstagram} alt="logo instagram" width="37px" /></a>
              <a href=""><img src={LogoWp} alt="logo whatsapp" width="37px" /></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Movie;