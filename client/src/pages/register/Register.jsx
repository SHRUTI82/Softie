import { useRef } from "react";
import { useState } from "react";
import "./register.scss"
import {Link} from 'react-router-dom'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
        <img 
        className="logo"
        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
        alt=""
        />
{/* 
        <button className="loginButton">Sign In</button> */}

        </div>
      </div>
      <div className="container">
        

      <form>
                    <h1>SIGN UP</h1>
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign Up</button>
                    <span>
                        Already a member?   <Link to="/" className='links'>      <b> Sign In </b> </Link>
                    </span>

                    {/* <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <b>Learn more</b>
                    </small> */}
                </form>

      </div>
    </div>
  );
}