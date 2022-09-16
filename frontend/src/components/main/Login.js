import React from 'react'
import './style.css'
const Login = () => {
  return (
    
    <div class="container">
        <h1>Log In</h1>
        <div class="box">
            <i class="fa fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Enater Your Email"/>

        </div>
        <div class="box">
            <i class="fa fa-key"></i>
            <input type="password" name="password" id="password" placeholder="Enter your Password"/>

        </div>
        <button class="btn">Sigh In</button>

    </div>
  )
}

export default Login;