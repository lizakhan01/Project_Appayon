import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />} 
            <input type="text" placeholder='Email Address' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={() => setCurrState("Login")}>Click here to Login</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
