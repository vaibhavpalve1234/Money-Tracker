import {useState} from 'react'
const AddExpenseItem = (props) => {
    const [payerId, setpayerId] = useState('')
    const [amount, setamount] = useState(0)
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')
    console.log(props);

    const handleSumit = (e) =>{
        e.preventDefault()
        console.log(payerId, amount,category,description);
    }

    return (
        <div className="nav justify-content-center">
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSumit}>
                <div className="mb-3">
                    <label>Transaction PayerId:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={payerId}
                        onChange={(e) =>{setpayerId(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label><span>Amount (₹):</span></label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter email"
                        value={amount}
                        onChange={(e)=>{setamount(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label><span>category:</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        value={category}
                        onChange={(e)=>{setcategory(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label>
                        <span>description:</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        value={description}
                        onChange={(e)=>{setdescription(e.target.value)}}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddExpenseItem;