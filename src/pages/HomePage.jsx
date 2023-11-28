import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'


const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <div className="div-main-aside">
        <ListMovies />
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div >
  );
}

export default HomePage;