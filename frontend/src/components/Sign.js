import { useState } from 'react'
import axios from'axios';
import {useNavigate} from 'react-router-dom';
const Sign = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleUserIdchange = (e) => {
        setUserId(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const postData = async(name, userId, email, password) =>{
        console.log({name, userId, email, password});
        const result = await axios.post('http://localhost:4000/register',{name, user_id:userId, email, password})
        console.log(result.data, result.statusText);
        if(result.statusText ==='Created'){
            alert("user created!! ")
            navigate('/List')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postData(name, userId, email, password)
    }

    return (
        <div >
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <h3> Sign-up Form </h3>
                <div className="mb-1">
                <label >
                    UserId:
                </label><br />
                <input type="number" className="form-control" value={userId} required onChange={(e) => { handleUserIdchange(e) }} /><br />
                </div>
                <div className="mb-1">
                <label>
                    Name:
                </label><br />
                <input type="text" value={name} className="form-control" required onChange={(e) => { handleNameChange(e) }} /><br />
                </div>
                <div className="mb-1">
                <label>
                    Email:
                </label><br />
                <input type="email" value={email} className="form-control" required onChange={(e) => { handleEmailChange(e) }} /><br />
                </div>
                <div className="mb-1">
                <label>
                    Password:
                </label><br />
                <input type="password" value={password} className="form-control" required onChange={(e) => { handlePasswordChange(e) }} /><br />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Sign;