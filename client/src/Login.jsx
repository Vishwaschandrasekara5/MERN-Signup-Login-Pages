import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {

    
    const [email,setemail] = useState();
    const [password,setpassword] = useState();
    const navigate =useNavigate()
   

    const handlesubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/Login', {email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/Home")
            }
        })
        
        .catch(err=> console.log(err))
        
        

}

  return (
    <div className="d-flex justify-content-center align-items-center bg-bg-secondary rounded shadow vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2>Log In</h2>
      <form onSubmit={handlesubmit}>
       
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e)=>{setemail(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control rounded-0"
            onChange={(e)=>{setpassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Login
        </button>
        </form>
       
      
    </div>
  </div>
);
}
  


export default Login