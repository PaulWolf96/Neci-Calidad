import { createContext, useState } from "react";

const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
  const [listMovies, setListMovies] = useState([]);

  return (
    <ApiContext.Provider value={{listMovies, setListMovies}}>
      {children}     
    </ApiContext.Provider>
  )
}

export default ApiContext;