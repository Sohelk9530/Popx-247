import React, { useState } from 'react';
import './signup.css';
import Getinput from './Getinput';
import UserProfile from '../user/UserProfile';
import ScienceDev from '../assets/ScienceDev.png'

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange =(e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setsubmit(true);
  };
  const Resetfun = () => {
    setForm({
      fullName: '',
      phone: '',
      email: '',
      password: '',
      company: '',
      isAgency: 'yes'
    });
  }
  const [submit, setsubmit] = useState(false)

  return (
    <>
      {
        submit ?<UserProfile name={form.fullName} email={form.email} src1={ScienceDev} />
          : 
            <form  onSubmit={handleSubmit} className="register-container">
              <h2>Create your <br /> PopX account</h2>
                
              <Getinput label="Full Name" required value={form.fullName} name="fullName" onChange={(e) => handleChange(e)} />
              <Getinput label="Phone number" required value={form.phone} name="phone" onChange={(e) => handleChange(e)} />
              <Getinput label="Email address" required value={form.email} name="email" onChange={(e) => handleChange(e)} />
              <Getinput label="Password" type="password" required value={form.password} name="password" onChange={(e) => handleChange(e)} />
              <Getinput label="Company name" value={form.company} name="company" onChange={(e) => handleChange(e)} />

              <div className="input-group">
                <label>Are you an Agency? <span className="required">*</span></label>
                <div className="radio-group">
                  <label><input type="radio" name="isAgency" value="yes" checked={form.isAgency === 'yes'} onChange={(e) => handleChange(e)} /> Yes</label>
                  <label><input type="radio" name="isAgency" value="no" checked={form.isAgency === 'no'} onChange={(e) => handleChange(e)} /> No</label>
                </div>
              </div>
              
              <button className="submit-btn" type='submit' >Create Account</button>
              <button type='button' className="submit-btn" onClick={Resetfun}>Reset</button>
            </form>
          
      }

    </>
  );

};

export default SignUp;
