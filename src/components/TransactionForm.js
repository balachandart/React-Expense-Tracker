import React,{useState} from 'react'
import { uniqueId } from './Utils';


const TransactionForm = ({transaction,setTransaction}) => {
  const[nameValue,setNameValue]=useState('');
  const[amountValue,setAmountValue]=useState('');
  const addTransaction=(type,e)=>{
        e.preventDefault();
        if(nameValue === '' || amountValue === ''){
          alert("Please fill out both fields Properly")
          return;
        }
        const list=[...transaction,
          { id: uniqueId(),
            name:nameValue,
            amount:parseInt(amountValue),
            type:type }
        ]
        setTransaction(list)
        localStorage.setItem("expense-tracker",JSON.stringify(list))
        setNameValue('')
        setAmountValue('')
        
  }
  return (
    <div>
      <h2>Add New Transaction</h2>
      <form className='transaction-form'>
      <label>
        Name
      <div>
          <input type="text"
          placeholder='Name'
          required
          value={nameValue}
          onChange={(e)=>setNameValue(e.target.value)} />
      </div>
      </label>

      <label>
         Amount
      <div>
          <input type="number"
          placeholder='Amount'
          required
          value={amountValue}
          onChange={(e)=>setAmountValue(e.target.value)}  />
      </div>
      </label>

        <div>
          <button className='income-btn' type="submit" onClick={(e)=>addTransaction('income',e)}>Add Income</button>
          <button className='expense-btn' type='submit' onClick={(e)=>addTransaction('expense',e)}>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default TransactionForm