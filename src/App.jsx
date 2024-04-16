import logo from './assets/investment-calculator-logo.png'
import Calc from './components/Calc'
import Header from './components/Header'
import React, { useState } from 'react'
import './App.css'
import Show from './components/Show'
import { calculateInvestmentResults } from './investment'
function App() {
  const [calculations,setCalculations] = useState(null)
  const [inputValid, setInputValid] = useState(false)
  const getData = (data)=>{
    if (data.initialInvestment && data.annualInvestment && data.expectedReturn && data.duration){
      setCalculations(calculateInvestmentResults(data))
      if (data.duration>0){
        setInputValid(true)
      }else{
        setInputValid(false)
      }
    }
  }
  return (
    <div className='App'>
      <Header src={logo} text='Investment Calculator'/>
      <Calc getData={getData}/>
      {!inputValid && <p className='center'>Please enter valid duration</p>}
      {calculations && inputValid &&
      <Show calculations={calculations}>
      
      </Show>}
    </div>
  )
}

export default App
