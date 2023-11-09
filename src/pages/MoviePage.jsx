import Header from "../components/Header";
import LinksDownload from "../components/LinksDownload";
import Movie from "../components/Movie";
import '../styles/app.css';

const MoviePage = () => {
    return (
      <div className="container">
        <Header />
        <Movie />
        <br />
        <LinksDownload />
      </div>        
    );
}

export default MoviePage;