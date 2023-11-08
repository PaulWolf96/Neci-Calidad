import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import '../styles/app.css'

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <div className="div-main-aside">
        <Main />
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default HomePage;