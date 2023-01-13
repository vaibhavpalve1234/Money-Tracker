import AddExpenseItem from './AddExpenseItem'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SplitItemList from './SplitItem'

const TransactionForm = () => {
    const location = useLocation();
    const [addItem, setAddItem] = useState(false)

    return (
        <div>
            <div >
                <div className="nav justify-content-center" >
                    <button type="submit" disabled={addItem} className="btn btn-primary " onClick={() => setAddItem(true)}>
                        Add Item
                    </button>
                    <SplitItemList />
                </div>
                <div >
                    {(addItem && <AddExpenseItem headerData={location} />)}
                </div>
            </div>
        </div>
    )
}
export default TransactionForm;