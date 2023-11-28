import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'

const GenrePage = ({ endpoint }) => {
  return (
    <div className="container">
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