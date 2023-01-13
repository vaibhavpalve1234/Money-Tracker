import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const EditExpenseItem = (props) => {
    const navigate = useNavigate()
    const payerId = props.payerId
    const [amount, setamount] = useState()
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')

    const updateTransactionData = async( amount, category, description) =>{
        const token  = window.localStorage.getItem('token')
        console.log(token);
        if(payerId){
            const result = await axios.put(`http://localhost:4000/transaction/?payerId=${payerId}`,
            {amount, category, description}, 
            {
                headers:
                {
                    token
                }
            })
            console.log(result);
            if(result.statusText ==='OK'){
                alert("Transaction updated !! ")
                navigate('/List')
            }
        }
    }
    const handleChange=()=>{
    }
    const handleSumit = (e) => {
        e.preventDefault()
        updateTransactionData(amount, category, description);
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

export default EditExpenseItem;