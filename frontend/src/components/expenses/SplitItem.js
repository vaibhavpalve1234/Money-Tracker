import {useState, useEffect} from'react';
import axios from 'axios';
import ShowItem from './ShowItem';

const SplitItemList = () => {
    const [payerId, setPayerId] = useState('')
    const [category, setCategory] = useState('')
    const [splitData, setSplitData] = useState({})

    useEffect(() => {
        const getData = async () => {
            const token = window.localStorage.getItem('token')
            const { data } = await axios.get('http://localhost:4000/splitTransaction', { headers: { token } })
            setSplitData({data})
            
            }
            getData()
        }
    )
    
    function handlePayerIdChange(event) {
        setPayerId(event.target.value)
    }
    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }
    console.log(splitData);
    return (
        <div className="nav justify-content-center">
            <form action="/" className='form-inline'>
                <div className='dropdown btn-group dropright'>
                    <label for="category">Choose a PayerId:</label>
                    <select name="PayerId" onChange={handlePayerIdChange}>
                        <option value="Default">N/A</option>
                        <option value="123">123</option>
                        <option value="32">32</option>
                        <option value="234">234</option>
                        <option value="43">43</option>
                    </select>
                </div>
                <div className='dropdown btn-group dropright'>
                    <label for="category">Choose a category:</label>
                    <select name="category" onChange={handleCategoryChange}>
                        <option value="Default" >Default</option>
                        <option value="food">Food</option>
                        <option value="pen">Pen</option>
                        <option value="Water">Water</option>
                        <option value="None">None</option>
                    </select>
                </div>
            </form>
            <div>
                <ShowItem/>
            </div>
        </div>
    );
}

export default SplitItemList;