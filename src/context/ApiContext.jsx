import { createContext, useReducer, useState } from "react";

const ApiContext = createContext();

const API_KEY = '52a625a829f55a42813acab1b8e140d2';

const initialState =  {
  endpointApi: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  route: '/'
} 

const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION': 
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
          route: 'movies/genre/action'
        }
      )
    case 'CRIME':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
          route: 'movies/genre/crime'
        }
      ) 
    case 'COMEDY':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
          route: 'movies/genre/comedy'
        }
      )
    case 'SCIENCE FICTION':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
          route: 'movies/genre/sciencefiction'
        } 
      ) 
    case 'ADVENTURE':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
          route: 'movies/genre/adventure'
        }
      )
    case 'ANIMATION':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
          route: 'movies/genre/animation'
        }
      )
    case 'HORROR':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
          route: 'movies/genre/horror'
        }
      )
    case 'THRILLER':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,
          route: 'movies/genre/thriller'
        }
      )
    case 'ROMANCE':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
          route: 'movies/genre/romance'
        }
      )
    case 'FAMILY':
      return (
        state = {
          endpointApi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
          route: 'movies/genre/family'
        }
      )
    default: 
      return state;
  }
}



export const ApiProvider = ({ children }) => {

  const [listMovies, setListMovies] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch(state.endpointApi);
      const data = await response.json();
      await setListMovies(data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };


  return (
    <ApiContext.Provider value={{state, dispatch, listMovies, fetchData}}>
      {children}     
    </ApiContext.Provider>
  )
}


export default ApiContext;