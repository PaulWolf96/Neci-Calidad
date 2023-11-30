import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import GenrePage from "../pages/GenrePage";


const API_KEY = '52a625a829f55a42813acab1b8e140d2';
const endpointAction = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
const endpointCrime = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`;
const endpointComedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
const endpointSciencefiction = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`;
const endpointAdventure = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`;
const endpointAnimation = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`;
const endpointHorror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
const endpointThriller = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`;
const endpointRomance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const endpointFamily = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`;



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/genre/action" element={<GenrePage endpoint={endpointAction}/>} />
      <Route path="/genre/crime" element={<GenrePage endpoint={endpointCrime}/>} />
      <Route path="/genre/comedy" element={<GenrePage endpoint={endpointComedy}/>} />
      <Route path="/genre/sciencefiction" element={<GenrePage endpoint={endpointSciencefiction}/>} />
      <Route path="/genre/adventure" element={<GenrePage endpoint={endpointAdventure}/>} />
      <Route path="/genre/animation" element={<GenrePage endpoint={endpointAnimation}/>} />
      <Route path="/genre/horror" element={<GenrePage endpoint={endpointHorror}/>} />
      <Route path="/genre/thriller" element={<GenrePage endpoint={endpointThriller}/>} />
      <Route path="/genre/romance" element={<GenrePage endpoint={endpointRomance}/>} />
      <Route path="/genre/family" element={<GenrePage endpoint={endpointFamily}/>} />
    </Routes>
  );
}

export default AppRoutes;