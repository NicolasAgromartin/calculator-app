/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react"

const ThemeContext = createContext();


export function ThemeContextProvider({children} ) {

  const [ theme, setTheme ] = useState('blue');

  function toggleTheme(selector) {
    selector === 1 &&  setTheme('blue')
    selector === 2 &&  setTheme('white')
    selector === 3 &&  setTheme('purple')
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}


export function useThemeContext() {
  return useContext(ThemeContext)
}