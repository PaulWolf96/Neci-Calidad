import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [modeDark, setModeDark] = useState(JSON.parse(localStorage.getItem('modeDark')));

  localStorage.setItem('modeDark', modeDark);
  

  return (
    <ThemeContext.Provider value={{modeDark, setModeDark}}>
      {children}
    </ThemeContext.Provider>
  ); 
}

export default ThemeContext;