import "./login.scss";
import {Link} from 'react-router-dom'

export default function Login(){
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
                <form>
                    <h1>SIGN IN</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
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
