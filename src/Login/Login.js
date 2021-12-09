import React, { useState } from "react";
import './Login.css'
 import {useHistory} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "../option/userSlice";
import { isLogin, loginauth, remove } from "../auth";


const Login = () =>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const dispatch= useDispatch();
     const history =useHistory();


    const handleSubmit = (e) => {
          e.preventDefault();
          localStorage.setItem('e','rajdharan@gmail.com');
    localStorage.setItem('p','222555');

    const E = localStorage.getItem('e');
    const P = localStorage.getItem('p');
    let loggedIn =false



    if(email==E && password==P)
    {
        loginauth();


        loggedIn=true
    }
     else{
         alert("Enter Your Data Correctly")
    }


        dispatch(
            login({
            email:'',
            password:'',
            loggedIn

        })
        );
    if(loggedIn==true)
    {

        history.push('/add')


    }


    };

       return(


        <div className="login">
            <form className="login_form" /* onSubmit={(e)=> handleSubmit(e)}*/ >
                <h1>LOGIN</h1>
                <input type="email" 
                name='email'
                
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} required
                />
                <input
                type="password"
                required
                name='password'
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} required
                />
                <button type="submit"  onClick={(e)=>handleSubmit(e)}  className="submit_btn">Submit</button>
            </form>

        </div>
    )

}
export default Login