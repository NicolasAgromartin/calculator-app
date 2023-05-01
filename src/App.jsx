// components
import Switch from './components/Switch/Switch';
import Screen from './components/Screen/Screen';
import Pad from './components/Pad/Pad';
// context
import { useThemeContext } from './context/ThemeContextProvider';

export default function App() {

  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}-app`}>
      <div className='calculator-container'>
        <header>
          <h1>calc</h1>
          <Switch />
        </header>
        <Screen />
        <Pad />
      </div>
    </div>
  )
}

