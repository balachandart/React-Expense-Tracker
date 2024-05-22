import React from 'react'

const Expenses = ({income,expense}) => {
  
  return (
    <section className='expences'>
      <h2>Your Balance
      <div className='balance-val'>₹.{income - expense}</div>
      </h2>
      
      <div className='row row-expense'>
          <div className='col col-income'>
            <span>
            <h3>Income</h3>
            <div className='income-text'>₹{income}</div>
            </span>
          </div>

          <div className='col col-expense'>
            <h3>Expense</h3>
            <div className='expense-text'>₹{expense}</div>
          </div>

      </div>
      
    </section>
  )
}

export default Expenses