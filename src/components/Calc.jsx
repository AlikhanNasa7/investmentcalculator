import React, { useEffect, useReducer } from 'react'
const ReducerFunction = (state, action)=>{
  switch(action.type){
    case 'init':
      return {
        ...state, initialInvestment: +action.payload
      }
    case 'annual':
      return {
        ...state, annualInvestment: +action.payload
      }
    case 'return':
      return {
        ...state, expectedReturn: +action.payload
      }
    case 'duration':
      return {
        ...state, duration: +action.payload
      }
    default:
      return state
  }

}
const Calc = ({getData}) => {
  const [data, dispatch] = useReducer(ReducerFunction,{
    initialInvestment: 0,
    annualInvestment:0,
    expectedReturn:0,
    duration:0
  })
  const changeHandler = (type, value)=>{
    dispatch({type:type, payload: value})
  }
  useEffect(()=>{
    if (data.initialInvestment) getData(data)
  },[data])
  return (
    <div id='user-input'>
      <div className='input-group'>
        <p>
          <label>INITIAL INVESTMENT</label>
          <input placeholder='1000' type='number' required onChange={(e)=>changeHandler('init', e.target.value)}></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input placeholder='200' type='number' required onChange={(e)=>changeHandler('annual', e.target.value)}></input>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>EXPECTED INCOME</label>
          <input placeholder='12' type='number' required onChange={(e)=>changeHandler('return', e.target.value)}></input>
        </p>
        <p>
          <label>DURATION</label>
          <input placeholder='7' type='number' required onChange={(e)=>changeHandler('duration', e.target.value)}></input>
        </p>
      </div>
    </div>
  )
}

export default Calc