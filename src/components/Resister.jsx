import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './mix.css';

const Resister = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCpassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval({ ...inpval, [name]: value });
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { email, fname, password, cpassword } = inpval;

    if (fname === '') {
      alert('Please Enter Your name');
      return;
    } else if (email === '') {
      alert('Please Enter Your Email');
      return;
    } else if (!email.includes('@')) {
      alert('Please Enter Valid Email');
      return;
    } else if (password === '') {
      alert('Please Enter Valid Password');
      return;
    } else if (password.length < 6) {
      alert('Password must be 6 character');
      return;
    } else if (cpassword === '') {
      alert('Please Enter Valid confirm Password');
      return;
    } else if (cpassword.length < 6) {
      alert('Password must be 6 character');
      return;
    } else if (password !== cpassword) {
      alert('Password and confirmed password does not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:1000/register', inpval);

      console.log(response.data);

    //   if(response.status===201)
    //   {
    //     alert("done resistration");
    //     setInpval({...inpval,fname:"",email:"",password:"",cpassword:""});
    //   }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Sign Up</h1>
          <p style={{ textAlign: 'center' }}>We are glad that you are using project cloud to manage <br/> your task! We hope that you like it.</p>
        </div>

        <form>
          <div className="form_input">
            <label htmlFor="fname">Name</label>
            <input onChange={setVal} type="text" value={inpval.fname} name="fname" id="fname" placeholder="Enter your name" />
          </div>

          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input onChange={setVal} type="email" value={inpval.email} name="email" id="email" placeholder="Enter your Email address" />
          </div>

          <div className="form_input">
            <label htmlFor="password">Password</label>
            <div className="two">
              <input onChange={setVal} type={passShow ? 'text' : 'password'} value={inpval.password} name="password" id="password" placeholder="Enter your password" />
              <div className="showpass" onClick={() => setPassShow(!passShow)}>
                {passShow ? 'Hide' : 'Show'}
              </div>
            </div>
          </div>

          <div className="form_input">
            <label htmlFor="cpassword">Confirm Password</label>
            <div className="two">
              <input onChange={setVal} type={cpassShow ? 'text' : 'password'} value={inpval.cpassword} name="cpassword" id="cpassword" placeholder="Enter your password" />
              <div className="showpass" onClick={() => setCpassShow(!cpassShow)}>
                {cpassShow ? 'Hide' : 'Show'}
              </div>
            </div>
          </div>

          <button className="btn" onClick={addUserdata}>Sign Up</button>
          <p>Don't have any account ? <NavLink to='/'>Log In</NavLink></p>
        </form>
      </div>
    </section>
  );
};

export default Resister;
