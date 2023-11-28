import Header from "../components/Header";
import LinksDownload from "../components/LinksDownload";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import '../styles/app.css';
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const MoviePage = () => {

  const {modeDark} = useContext(ThemeContext);

    return (
      <div className={modeDark ? 'container-dark' : 'container'}>
        <Header />
        <br />
        <Movie />
        <br />
        <LinksDownload />
        <br />
        <Footer />
      </div>        
    );
}

export default MoviePage;