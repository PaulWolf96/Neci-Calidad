import Header from "../components/Header";
import LinksDownload from "../components/LinksDownload";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import '../styles/app.css';


const MoviePage = () => {
    return (
      <div className="container">
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