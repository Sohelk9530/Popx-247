import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router';
import UserProfile from '../user/UserProfile';
import ScienceDev from '../assets/ScienceDev.png'

const Login = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setsubmit(true);
  };
  const [submit, setsubmit] = useState(false)
  return (
    <>
      {
        submit ? <UserProfile name={form.fullName} email={form.email} src1={ScienceDev} />
          :
          <form onSubmit={handleSubmit} className="login-container">
            <h2>Signin to your <br /> PopX account</h2>
            <p className="description">
              Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
            </p>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter Full name" name='fullName' value={form.fullName} required onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" name='email' value={form.email} required onChange={(e) => handleChange(e)}/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" name='password' value={form.password} required onChange={(e) => handleChange(e)}/>
            </div>

            <button className="login-btn" type='submit'>Login</button>
          </form>
      }
    </>

  );
};

export default Login;
