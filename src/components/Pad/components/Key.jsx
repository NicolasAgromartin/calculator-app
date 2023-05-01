/* eslint-disable react/prop-types */
// css
import './key.css';
// context
import { useThemeContext } from '../../../context/ThemeContextProvider';
import { useCalculatorContext } from '../../../context/CalculatorContextProvider';

export default function Key({ children }) {

  const { theme } = useThemeContext();
  const { 
    operand, 
    setOperand, 
    secondOperand, 
    setSecondOperand, 
    operator, 
    setOperator, 
    setResult
  } = useCalculatorContext();


  

  function clickHandler(entry) {
    // handle numbers
    if(!isNaN(entry)) {
      // first number
      if(operator === null) {
        setOperand(operand + entry)
      } else {
        // second number
        setSecondOperand(secondOperand + entry) 
      } 
    }
    // handle .
    if(entry === '.') {
      // first number
      if(operator === null) {
        operand.includes('.')? null : setOperand(operand + entry)
      } else {
        // second number
        secondOperand.includes('.')? null : setSecondOperand(secondOperand + entry)
      }
    }

    // handle operators
    if(operand !== '' && operator === null && 
       entry === '+' | entry === '-' | entry === 'x' | entry === '/') {
        setOperator(entry)
      }

    // handle reset
    if(entry === 'Reset'){
      setOperand(''), setSecondOperand(''), setOperator(null), setResult('')
    }
    // handle del button
    if( entry === 'Del') {
      // first number
      if(operator === null) {
        setOperand(operand.slice(0, -1))
      } else {
      // second number
        setSecondOperand(secondOperand.slice(0, -1))
      }
    }

    // calculate result
    if(entry === '=') {
      operator === '+' && setResult(parseFloat(operand) + parseFloat(secondOperand))
      operator === '-' && setResult(parseFloat(operand) - parseFloat(secondOperand))
      operator === 'x' && setResult(parseFloat(operand) * parseFloat(secondOperand))
      operator === '/' && setResult(parseFloat(operand) / parseFloat(secondOperand))
    }
  }

  return (
    <div className={`key 
      ${theme}-key 
      ${children === '=' && `equal-button ${theme}-equal-button` } 
      ${children === 'Del' && `del-button ${theme}-del-button` }
      ${children === 'Reset' && `reset-button ${theme}-reset-button` }`} 
      onClick={() => clickHandler(children)}>

        { children }
    </div>
  )
}
