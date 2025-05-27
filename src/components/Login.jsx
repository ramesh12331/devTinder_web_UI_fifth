import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () =>{
    try{const res = await axios.post("http://localhost:7777/login",{
      emailId,
      password
    },{withCredentials:true});
    console.log(res.data);
    dispatch(addUser(res.data));
    return navigate("/");
  }
    catch(err){
      console.error(err);
    }
  };

  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className=''>
      <legend className="fieldset-legend">Email Id</legend>
      <input value={emailId} onChange={(e)=>{setEmailId(e.target.value)}} type="text" className="input"  />
    </div>
    <div className='mb-2'>
      <legend className="fieldset-legend">Password</legend>
      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="input"  />
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
