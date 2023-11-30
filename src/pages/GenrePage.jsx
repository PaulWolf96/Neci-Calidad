import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MovieContext from "../context/MovieContext";
import ListSearchMovie from "../components/ListSearchMovie";

const GenrePage = ({ endpoint }) => {
  const {modeDark} = useContext(ThemeContext);
  const {query} = useContext(MovieContext);

  return (
    <div className={modeDark ? 'container-dark' : 'container'}>
      <Header />
      <br />
      <div className="div-main-aside">
        {/* Si la variable de estado "query" tiene contenido, entonces renderiza 
        el componente que muestra las peliculas encontradas. Sino renderiza 
        el componente que muestra las películas por género */}
      { query ? <ListSearchMovie /> : <ListMovies endpoint={endpoint} /> }
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div >
  );
}

export default GenrePage;