import React,{ Children, useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import signupImg from "./assets/res2.jpg";
import 'material-icons/iconfont/material-icons.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import Food from "./food";
import { useNavigate} from "react-router-dom";


export const Auth = () =>{
const [email,setEmail]=useState("");
const [password, setPassword]= useState("");
const navigate =useNavigate()

    const signUp = async () => 
{
    await createUserWithEmailAndPassword(auth,email,password)
    navigate('/food')
     }
  
    return (
        <>
    <div className="signUp">

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <img className="signupimg" src={signupImg} alt= "doddo"></img>

        <form className="form" onSubmit={signUp}>
        <input className="textbox"
        type="email"
        placeholder="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}>
        </input>

<br/>

        <input className="textbox"
        placeholder="password"
        type="password"
        value={password}
         onChange={(e)=> setPassword(e.target.value)}
        >  
         </input>
         
         <br/>
        <p>already have an account? Login</p>
       <button className="sbutton"onClick={{signUp}}>Sign In</button>
    </form>
    </div>
 


    
    </>);

};