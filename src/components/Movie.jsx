import '../styles/movie.css';
import LogoInstagram from '../img/instagramLogo.png';
import LogoWp from '../img/whatsappLogo.png';
import { BsFillShareFill } from 'react-icons/bs';
import { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const Movie = () => {

  const {infoMovie} = useContext(MovieContext);

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
          <p className="paragraph-synopsis">El periodista Eddie Brock intenta desenmascarar al genio científico Carlton Drake, el célebre fundador de la Fundación Vida. Mientras investiga uno de los experimentos de Drake, Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.</p>
          <br />
          <span>
            <strong>Titulos:</strong>
            Venom
          </span>
          <span>
            <strong>TMDB:</strong>
          </span>
          <span>
            <strong>Género:</strong>
            Accion, Ciencia Ficción
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
            Ruben Fleischer, Andy Serkis
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