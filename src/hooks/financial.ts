import { useContext } from 'react';
import { FinancialContext } from '../context/financialContext';

export const useFinancial = () =>{
  const c = useContext(FinancialContext);
  
  if (!c) {
    throw new Error('useFinancial must be used within a FinancialProvider');
  } 

  return c
}