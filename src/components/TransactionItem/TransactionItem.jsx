import css from './TransactionItem.module.css'

const TransactionItem = ({item}) => {
const {type, amount, currency} = item
  return (
    <tr className={css.tableItem}>
      <td className={css.tableColumn}>{type}</td>
      <td className={css.tableColumn}>{amount}</td>
      <td className={css.tableColumn}>{currency}</td>
    </tr>
  )
}

export default TransactionItem

