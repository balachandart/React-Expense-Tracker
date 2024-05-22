import React from 'react'
import { FaTrash } from "react-icons/fa";


const TransactionHistory = ({transaction,handleDelete,search,setSearch}) => {

  return (
    <div>
    <h2>Transaction History</h2>
    <input type="text"
    className='search'
    placeholder='Search Transactions'
    value={search}
    onChange={(e)=>setSearch(e.target.value)} />
    <ul className='transactions'>
      { transaction.map((data)=>(
        <li key={data.id} className={data.type==='expense'?'expense':'income'}>
          <div>{data.name}</div>
          <div><span>₹{data.amount}</span>
          <FaTrash className='trash' style={{cursor:"pointer"}}
        onClick={()=>handleDelete(data.id)}
        role='button'/>
          
        </div>  
        
        </li>
      ))}
    </ul>
    </div>
  )
}


export default TransactionHistory