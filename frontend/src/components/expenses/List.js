import ExpenseList from "./ExpenseList";
import axios from 'axios'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
const List = () => {
    const navigate = useNavigate()
    const [listData, setListData] = useState('')
    const [addItem, setAddItem] = useState(false)
    const getData = async () => {
        try {
            const token = window.localStorage.getItem('token')
            const result = await axios.get('http://localhost:4000/transactionDetails', { headers: { token } })
            setListData(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect((e) => { getData() }, [])
    return (
        <div>
            <div>
                <div >
                    <br />
                    <div className="nav justify-content-center" >
                        <button type="submit" disabled={addItem} className="btn btn-primary " onClick={() => setAddItem(true)}>
                            Add Button!!{addItem && navigate('/Form',{replace:true}) }
                        </button>
                    </div>
                    <br />
                </div>
                <a href='/Split-List'>SplitItemList</a>
            </div>
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