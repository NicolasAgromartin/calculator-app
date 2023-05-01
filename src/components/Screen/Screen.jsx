// css
import '../../assets/css/screen.css';
// context
import { useThemeContext } from '../../context/ThemeContextProvider';
import { useCalculatorContext } from '../../context/CalculatorContextProvider';

export default function Screen() {
  const { theme } = useThemeContext();
  const { operand, operator ,secondOperand, result } = useCalculatorContext();

  return (
    <div className={`screen ${theme}-screen`}>
      { result? result : secondOperand? secondOperand : operator? operator : operand }
    </div>
  )
}
