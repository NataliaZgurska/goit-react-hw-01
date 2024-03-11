import css from './TransactionHistory.module.css'
import TransactionItem from '../TransactionItem/TransactionItem'

const TransactionHistory = ({items}) => {
  return <table className={css.tableContainer}>
  <thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {Array.isArray(items) && items.map((item) => {
         return( <TransactionItem key={item.id} item={item } />)
})}
    
  </tbody>
</table>

}

export default TransactionHistory




