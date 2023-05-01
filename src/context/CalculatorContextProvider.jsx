/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

const CalculatorContext = createContext();


export function CalculatorContextProvider({ children }) {

  const [ operand, setOperand ] = useState('');
  const [ secondOperand, setSecondOperand ] = useState(''); 
  const [ operator, setOperator ] = useState(null);
  const [ result, setResult ] = useState('');


  useEffect(() => {
    setOperand(''), setSecondOperand(''), setOperator(null);
  },[result]);
  

  const contextValue = { 
    operand, 
    setOperand, 
    secondOperand, 
    setSecondOperand, 
    operator, 
    setOperator, 
    result, 
    setResult }

  return (
    <CalculatorContext.Provider value={ contextValue }>
      { children }
    </CalculatorContext.Provider>
  )
}

export function useCalculatorContext() {
  return useContext(CalculatorContext)
}