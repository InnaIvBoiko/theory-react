import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table} >
            <thead>
                <tr>
                    <th className={css.title} >Type</th>
                    <th className={css.title} >Amount</th>
                    <th className={css.title} >Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => (
                    <tr key={item.id} className={css.row} >
                        <td className={css.type} >{item.type}</td>
                        <td className={css.value} >{item.amount}</td>
                        <td className={css.value} >{item.currency}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
}