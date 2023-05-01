// css
import '../../assets/css/switch.css';

import { useThemeContext } from "../../context/ThemeContextProvider";
import { useState } from "react"

export default function Switch() {

  const { toggleTheme,theme } = useThemeContext();
  const [ selector, setSelector ] = useState(1);
  function clickHandler() {
    selector === 3 ? setSelector(1) : setSelector(selector  + 1);
    toggleTheme(selector)
  }


  return (
    <div className='switch-container'>
      <p>Theme</p>
      <div className='switch'>
        <span className='switch-position'>
          <p>1</p> <p>2</p> <p>3</p>
        </span>
        <span className={`switch-background ${theme}-switch-background`} >
          <figure className={`switch-ball ${theme}-switch-ball`} onClick={clickHandler} />
        </span>
      </div>
    </div>
  )
}
