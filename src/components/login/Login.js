import React,{useState} from "react";
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser({
        ...user,
         [name]: value,
    })
    
}

const navigate = useNavigate();

const navigateRegister = ()=>{
  navigate('/register');
}


const login = () =>{
  axios.post("http://localhost:9002/login", user)
  .then(res => {
    alert(res.data.message)
    props.setLoginUser(res.data.user)
    navigate("/")
  })

}
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="email"  name="email" value={user.email}   onChange={handleChange}  placeholder="Your Email" />
      <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" />
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={navigateRegister}>Register</div>
    </div>
  );
};

export default Login;
