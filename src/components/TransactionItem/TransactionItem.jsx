import css from './TransactionItem.module.css'

const TransactionItem = ({item}) => {

  return (
    <tr className={css.tableItem}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  )
}

export default TransactionItem

