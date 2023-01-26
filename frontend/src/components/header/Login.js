import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const postData = async (email, password) => {
        const responce = await axios.post('http://localhost:4000/login', { email, password })
        if (responce?.data?.token) {
            window.localStorage.setItem('token', responce.data.token);
            alert('user Login Succefully')
            navigate('/List', { replace: true })
        }
        else {
            alert("wrong password ")
            navigate('/')
        }

    }

    const handleSubmit = (e) => {
        postData(email, password)
        e.preventDefault();
    }
    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="/sign-up">password?</a>
                </p>
            </form>
        </div>
    </>
    );
}

export default Login;