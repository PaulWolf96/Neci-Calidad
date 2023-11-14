import { createContext, useReducer } from "react";

const StateContext = createContext();

const API_KEY = '52a625a829f55a42813acab1b8e140d2';

const initialState =  {
  endpointApi: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  route: '/'
} 

const reducer = (state, action) => {

  //const genres = [28, 80, 35, 878, 12, 16, 27, 53, 10749, 10751];

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


export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}     
    </StateContext.Provider>
  )
}


export default StateContext;