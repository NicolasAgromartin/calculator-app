// css
import '../../assets/css/pad.css'
// context
import { useThemeContext } from '../../context/ThemeContextProvider';
import Key from './components/Key';

export default function Pad() {

  const { theme } = useThemeContext();

  return (
    <div className={`pad ${theme}-pad`}>
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>Del</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>+</Key>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>-</Key>
        <Key>.</Key>
        <Key>0</Key>
        <Key>/</Key>
        <Key>x</Key>
        <Key>Reset</Key>
        <Key>=</Key>
    </div>
  )
}
