import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const AddExpenseItem = (props) => {
    const navigate = useNavigate()
    const [payerId, setpayerId] = useState('')
    const [amount, setamount] = useState()
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')

    const postTransactionData = async(payerId, amount, category, description) =>{
        const token  = window.localStorage.getItem('token')
        console.log(token);
        const result = await axios.post('http://localhost:4000/transaction',
        {payerId, amount, category, description}, 
        {
            headers:
            {
                token
            }
        })
        console.log(result);
        if(result.statusText ==='OK'){
            alert("Transaction added !! ")
            navigate('/List')
        }
    }
    const handleChange=()=>{

    }
    const handleSumit = (e) => {
        e.preventDefault()
        postTransactionData(payerId, amount, category, description);
    }

    return (
        <div className="nav justify-content-center">
            <form onSubmit={handleSumit}>
                <div className="mb-3">
                    <h3>Add a Transaction</h3>
                    <label>Transaction PayerId:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={payerId}
                        onChange={(e) => { setpayerId(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label><span>Amount (₹):</span></label>
                    <input
                        type="number"
                        className="form-control"
                        value={amount}
                        onChange={(e) => { setamount(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label><span>category:</span></label>
                    <input
                        type="text"
                        className="form-control"
                        
                        value={category}
                        onChange={(e) => { setcategory(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label>
                        <span>description:</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    
                        value={description}
                        onChange={(e) => { setdescription(e.target.value) }}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={handleChange}>
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddExpenseItem;