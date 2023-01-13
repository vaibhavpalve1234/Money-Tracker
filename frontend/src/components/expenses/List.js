import ExpenseList from "./ExpenseList";
import TransactionForm from "./ExpenseItem";
import axios from 'axios'
import { useEffect, useState } from 'react'
const List = () => {
    const [listData, setListData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const token = window.localStorage.getItem('token')
            const { data } = await axios.get('http://localhost:4000/transactionDetails', { headers: { token } })
            setListData({ ...data.data })
        }
        getData()
    }, [])
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