import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'
import Movie from "../components/Movie";
import MovieContext from '../context/MovieContext';
import { useContext } from "react";




const HomePage = () => {


  const { infoMovie } = useContext(MovieContext);

  return (
    <div className="container">
      <Header />
      <br />
      {!infoMovie ?
        <>
          <div className="div-main-aside">
            <ListMovies />
            <br />
            <Aside />
          </div>
          <br />
        </>
        :
        <>
          <Movie />
          <br />
        </>
      }
      <br />
      <Footer />
    </div>
  );
}

export default HomePage;