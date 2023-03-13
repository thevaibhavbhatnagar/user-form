import React from "react";
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Homepage = (props)=>{
    const navigate  = useNavigate();
    const logout =()=>{
        props.setLoginUser("");
        navigate("/login");
    }
    return(
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={logout}>Logout</div>
        </div>
    );
}

export default Homepage;