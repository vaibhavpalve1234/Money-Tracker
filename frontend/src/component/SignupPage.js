import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from './actions';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup({name,email,password}));
    history.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
       <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Signup</button>
    </form>
  )
  }
export default SignupPage
