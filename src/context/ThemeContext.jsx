import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [modeDark, setModeDark] = useState(false);
  

  return (
    <ThemeContext.Provider value={{modeDark, setModeDark}}>
      {children}
    </ThemeContext.Provider>
  ); 
}

export default ThemeContext;