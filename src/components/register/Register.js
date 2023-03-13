import React, {useState } from "react";
import "./Register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    email: "",
    number: "",
    password: "",

  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser({
        ...user,
         [name]: value,
    })

    
}
 
const register = ()=>{
  const {name, dob, email, number, password } = user;
  if(name && dob && email && number  && password ){
  axios.post("http://localhost:9002/register", user)
  .then(res => {
    alert(res.data.message)
    navigate("/login")
    })
  }else{
    alert("invalid input");
  }
}
 


  const navigate  = useNavigate();
  const navigateLogin = ()=>{
    navigate('/login');
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text"   name="name" value={user.name}     onChange={handleChange} placeholder="Your Name" />
      <input type="date"   name="dob" value={user.dob}       onChange={handleChange}  placeholder="Your DOB" />
      <input type="email"  name="email" value={user.email}   onChange={handleChange}  placeholder="Your Email" />
      <input type="tel"    name="number" value={user.number} onChange={handleChange}  placeholder="phone number" />
      <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" />
      <div className="button" onClick={navigateLogin}>Login</div>
      <div>or</div>
      <div className="button" onClick={register}>Register</div>
    </div>
  );
};

export default Register;
