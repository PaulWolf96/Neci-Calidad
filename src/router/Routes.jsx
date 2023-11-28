import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
//import ListMovies from "../components/ListMovies";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movies/genre/action" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;