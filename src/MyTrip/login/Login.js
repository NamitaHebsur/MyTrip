import {Link} from 'react-router-dom';
import React from 'react'
import './Login.css'

export default function Login(){
        return (
            <>
        <form className="form-box">
        <h1 className="head">Login Form</h1>
            <input type="email" name="emailid" placeholder="Email Address" required/> <br/>
            <input type="password" name="password" placeholder="Password" required/><br/>
            <button type="submit">Login</button> <br/>
            <span>are you new user?<Link to='/register'>Register Here</Link></span>
        </form>
    
            </>
        )
}
