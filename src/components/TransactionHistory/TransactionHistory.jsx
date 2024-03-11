import css from './TransactionHistory.module.css'
import TransactionItem from '../TransactionItem/TransactionItem'

const TransactionHistory = ({transactions}) => {
  return (
   <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

          <tbody>
              {transactions.map((transaction) => {
                 return( <TransactionItem key={transaction.id} transaction={transaction } />) 
              }
              
          )}    
       
    </tbody>
</table>

  )
}

export default TransactionHistory

