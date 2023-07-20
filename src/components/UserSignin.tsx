import React,{Component} from 'react';
/*import Cookies from 'js-cookie';*/

import '../assets/styles/User.css'

const UserLogin = () => {
  return (
    <div className='auth-wrapper'>
    <div className='auth-inner'>
    <form >
     <h3>Sign Up</h3>
      <div className="mb3">
        <label>Email Address</label>
        <input type='text' name='userEmail' className='form-control' placeholder='Inser your Email'/>
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input type='password' name='password' className='form-control' placeholder='Enter your password'/>
      </div>
      
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <p className="forgot-password text-right">
        Already Have Account <a href="/login">Log In?</a>
        </p>
    </form>
    </div>
    </div>
    
  )
}

export default UserLogin