import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const DeleteExpenseItem = (props) => {
    const navigate = useNavigate()
    const payerId = props.payerId
    const deleteTransactionData = async () => {
        const token = window.localStorage.getItem('token')
        console.log(payerId);
        if (payerId) {
            const result = await axios.delete(`http://localhost:4000/transaction/?payerId=${payerId}`, { headers: { token } })
            console.log(result);
            if (result.statusText === 'OK') {
                alert("Transaction deleted !! ")
                navigate('/List')
            }
        }
    }
    const handleSumit = (e) => {
        e.preventDefault()
        deleteTransactionData();
    }

    return (
        <div className="nav justify-content-center">
            <div>
                <h3>Please Conform Do you want to Delete Transactions?</h3>
            </div>
            <div>
                <button onClick={handleSumit}>
                    <h5>Continue</h5>
                </button>
                <div></div>
                <button>Cancle</button>
            </div>
        </div>
    );
}

export default DeleteExpenseItem;