import React from 'react'
import { formatter } from '../investment'
const Show = ({calculations}) => {
  console.log(calculations)
  const initialInvestment = calculations[0].valueEndOfYear - calculations[0].annualInvestment * calculations[0].year
  return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody className='center'>
            {calculations.map((year)=>{
              const totalInterest = year.valueEndOfYear - year.annualInvestment * year.year - initialInvestment
              return (
                <tr key={year.year}>
                  <td>{year.year}</td>
                  <td>{formatter.format(year.valueEndOfYear)}</td>
                  <td>{formatter.format(year.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(year.annualInvestment)}</td>
                </tr>
              )
            })}
        </tbody>
    </table>
  )
}

export default Show