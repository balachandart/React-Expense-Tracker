import React, { useState,useEffect } from 'react'
import Header from './Header'
import Expenses from './Expenses'
import TransactionHistory from './TransactionHistory'
import TransactionForm from './TransactionForm'
// import { uniqueId } from './Utils'

// const transactionData=[
// {id: uniqueId(),name:'Salary',amount:5000,type:'income'},
// {id: uniqueId(),name:'Grocery',amount:100,type:'expense'}
// ];

//Aggregator Component
const ExpenseTracker = () => {
  const[income,setIncome]=useState(0)
  const[expense,setExpense]=useState(0)
  const[transaction,setTransaction]=useState(JSON.parse(localStorage.getItem("expense-tracker"))||[])
  
  const calculateExpenses=()=>{
    let income=0, expense=0;
        transaction.forEach((data)=>{
          if(data.type==='income'){
            income +=data.amount;}
          else if(data.type==='expense'){
            expense +=data.amount;
          } });
            
            setIncome(income)
            setExpense(expense)
  }
    const handleDelete=(id)=>{
    const list=transaction.filter((data)=> data.id !== id)
    setTransaction(list)
    localStorage.setItem("expense-tracker",JSON.stringify(list))
  }  
  useEffect(()=>{calculateExpenses()
    //eslint-disable-next-line
  },[transaction])

  const[search,setSearch]=useState('')

  return (
    <main>
      <Header title="Expense Tracker" />
      <Expenses 
      income={income}
      expense={expense}/>
      <TransactionForm 
      transaction={transaction}
      setTransaction={setTransaction}
      />
      {(transaction.length )? (<TransactionHistory 
      transaction={transaction.filter((data)=>(data.name).toLowerCase().includes(search.toLowerCase()))}
      handleDelete={handleDelete}
      search={search}
      setSearch={setSearch}/>):(<p className='history'>No History of Transaction</p>) }
    </main>
  )
}

export default ExpenseTracker