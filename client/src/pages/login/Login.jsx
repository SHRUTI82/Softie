import "./login.scss";
import {Link,useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from "axios"



export default function Login(){

    const history=useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginsubmit(e){
        e.preventDefault();

        
      if (email === "" || password==="") {
        alert("Enter all feilds !")
    } else if (!email.includes("@")) {
        alert("Enter Valid Email !")
    }
    else{
        try {
            await axios.post("http://localhost:8000/api/auth/login",{email,password})
            .then(res=>{
                if(res.status===200){
                    history('/home')
                }
                else if(res.data===401){
                    console.log("user not signed up")
                    alert("This user is not signed up.")
                }
            })
            .catch(e=>{
                console.log("wrong details")
                console.log(e)

            })
        } catch (error) {
            console.log(error)
        }
    }
    }



    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                      className="logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                      alt=""
                      />
                </div>
            </div>
            <div className="container">
                <form action ="POST">
                    <h1>SIGN IN</h1>
                    <br />
                    <label  htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                   <br />
                    <button type="submit" className="loginButton" onClick={loginsubmit} >Sign Up </button>
                  <br />
                    <span>
                        Are you new to the Platform?   <Link to="/register" className='links'>      <b> Sign Up </b> </Link>
                    </span>

                    <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
}











