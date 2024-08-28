import React,{ Children, useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import signupImg from "./assets/res2.jpg";
import 'material-icons/iconfont/material-icons.css';




export const  Logins =() => {
    const [loginemail,setloginEmail]=useState("");
    const [loginpassword, setloginPassword]= useState("");


const login = async () =>{
    await signInWithEmailAndPassword(auth,loginemail,loginpassword)
    .then((userCredential) =>
        
    {const user =userCredential.user;}
    )
};

return (
   <>
<div className="signUp">

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

   <img className="signupimg" src={signupImg} alt= "doddo"></img>

   <form className="form" onSubmit={login}>
   <input className="textbox"
   type="email"
   placeholder="email"
   value={email}
   onChange={(e)=> setloginEmail(e.target.value)}>
   </input>

<br/>

   <input className="textbox"
   placeholder="password"
   type="password"
   value={password}
    onChange={(e)=> setloginPassword(e.target.value)}
   >  
    </input>
    
    <br/>
   <p>already have an account? Login</p>
  <button className="sbutton"onClick={{login}}>Sign In</button>
</form>
</div>
  







</>);

};


