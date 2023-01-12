import ExpenseList from './ExpenseList';
import AddExpenseItem from './AddExpenseItem'
import { useState } from 'react'
import {useLocation} from 'react-router-dom';
const TransactionForm = () => {
    const location = useLocation();
    const [addItem, setAddItem] = useState(false)

    console.log(location);
    return (
        <div className="nav justify-content-center">
            <div className="nav justify-content-center">
                <button type="submit" disabled={addItem} className="btn btn-primary" onClick={() => setAddItem(true)}>
                    Add Item
                </button>
                {(addItem && <AddExpenseItem headerData ={location} />)}
            </div>

        </div>
    )
}
export default TransactionForm;