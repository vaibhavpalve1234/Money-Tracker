import ExpenseList from "./ExpenseList";
import TransactionForm from "./ExpenseItem";
import axios from 'axios'
import { useEffect, useState } from 'react'
const List = () => {
    const [listData, setListData] = useState('')
    const getData = async () => {
        try {
            const token = window.localStorage.getItem('token')

            const result = await axios.get('http://localhost:4000/transactionDetails', { headers: { token } })

            console.log(result.data);
            setListData(result.data)
        } catch (error) {
            console.log(error);
        }
    }
useEffect((e) =>{getData()}, [])
console.log(listData);
return (
    <div>
        <TransactionForm />
        <div >
            <div className="row">
                {Object.values(listData).map((e) => {
                    return (
                        <div className="col card">
                            <div className="card-body">
                                <ExpenseList dataOfItem={e} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
);
}

export default List;