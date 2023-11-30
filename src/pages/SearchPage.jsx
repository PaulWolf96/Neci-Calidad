import Footer from "../components/Footer";
import Header from "../components/Header";
import Aside from "../components/Aside";
import '../styles/app.css'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ListSearchMovie from "../components/ListSearchMovie";

const SearchPage = () => {

  const {modeDark} = useContext(ThemeContext);

  return (
    <div className={modeDark ? 'container-dark' : 'container'}>
      <Header />
      <br />
      <div className="div-main-aside">
        <ListSearchMovie />
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div >
  );
}

export default SearchPage;