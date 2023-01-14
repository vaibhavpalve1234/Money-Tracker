import AddExpenseItem from './AddExpenseItem'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
const TransactionForm = () => {
    const location = useLocation();
    const [addItem, setAddItem] = useState(false)

    return (
        <div>
            <div >
            <br/>
                <div className="nav justify-content-center" >
                    <button type="submit" disabled={addItem} className="btn btn-primary " onClick={() => setAddItem(true)}>
                        Add Item
                    </button>  
                </div>
                <br/>
                <div >
                    {(addItem && <AddExpenseItem />)}
                </div>
            </div>
            <a href='/Split-List'>SplitItemList</a>
        </div>
    )
}
export default TransactionForm;