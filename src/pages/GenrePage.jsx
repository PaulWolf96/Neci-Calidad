import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const GenrePage = ({ endpoint }) => {

  const {modeDark} = useContext(ThemeContext);

  return (
    <div className={modeDark ? 'container-dark' : 'container'}>
      <Header />
      <br />
      <div className="div-main-aside">
        <ListMovies endpoint={endpoint} />
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div >
  );
}

export default GenrePage;