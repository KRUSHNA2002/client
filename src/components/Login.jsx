import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios  from 'axios';
import "./mix.css";

const Login = () => {

  const [passShow , setpassShow]=useState(false);

  const [inpval , setInpval]=useState({
    email:"",
    password:""
  })

  console.log(inpval);
  const setval=(e)=>{

    var {name , value}=e.target;

    setInpval(()=>{
       return {
        ...inpval,[name]:value
       }
    })
  }

  const loginuser=async(e)=>{
   
    e.preventDefault();

    const {email,password}=inpval;

   if(email==="")
    {
        alert("Please Enter Your Email ");
    }
    else if(!email.includes('@'))
    {
        alert("Please Enter Valid Email ");
    }
    else if(password === "")
    {
        alert("Please Enter Valid Password ");
    }
    else if(password.length < 6)
    {
        alert("Password must be 6 character ");
    }
    else
    {
        try {
            const response = await axios.post('http://localhost:1000/login', inpval);
      
            console.log(response.data);
      
            if(response.status===201)
            {
              alert("done login");
              setInpval({...inpval,fname:"",email:"",password:"",cpassword:""});
            }
          } catch (error) {
            console.error('Error login user:', error);
          }
    
    }
  }
    return (
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Welcome Back , to Login</h1>
                    <p>Hi , We are you Glad you are back . Please Login .</p>
                </div>

                <form>
                    <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' value={inpval.email}  onChange={setval} placeholder='Enter your Email address' />
                    </div>
                    <div className="form_input">
                        <label htmlFor="password">PassWord</label>
                        <div className="two">
                            <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setval} name='password' id='password' placeholder='Enter your password ' />
                            <div className="showpass" onClick={()=>setpassShow(!passShow)}>
                                {!passShow ? "Show" : "Hide"}
                            </div>
                        </div>
                    </div>

                    <button className='btn' onClick={loginuser} >Login</button>
                    <p>Don't  have any account ? <NavLink to='/register'> Sing up</NavLink></p>
                </form>
            </div>
        </section>
    )
}

export default Login
