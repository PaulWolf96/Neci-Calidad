import Header from "../components/Header";
import LinksDownload from "../components/LinksDownload";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import ListSearchMovie from "../components/ListSearchMovie";
import '../styles/app.css';
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MovieContext from "../context/MovieContext";


const MoviePage = () => {
  const {modeDark} = useContext(ThemeContext);
  const {query} = useContext(MovieContext);

    return (
      <div className={modeDark ? 'container-dark' : 'container'}>
        <Header />
        <br />
        {query ? <ListSearchMovie /> : <> <Movie /> <LinksDownload /> </> }
        <br />
        <Footer />
      </div>        
    );
}

export default MoviePage;