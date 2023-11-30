import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  //Estado con el booleano que controla el modo noche 
  //Inicialmente tiene el valor de la key "modeDark" en el localStorage
  //Esto para que persista el estado en caso de refresh de la página
  const [modeDark, setModeDark] = useState(JSON.parse(localStorage.getItem('modeDark')));

  localStorage.setItem('modeDark', modeDark);
  

  return (
    <ThemeContext.Provider value={{modeDark, setModeDark}}>
      {children}
    </ThemeContext.Provider>
  ); 
}

export default ThemeContext;