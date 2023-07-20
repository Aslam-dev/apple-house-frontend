import React,{Component} from 'react';
/*import Cookies from 'js-cookie';*/

import '../assets/styles/User.css'

const UserLogin = () => {
  return (
    <div className='auth-wrapper'>
    <div className='auth-inner'>
    <form >
      <h3>Sign In</h3>
      <div className="mb3">
        <label>Email Address</label>
        <input type='text' name='userEmail' className='form-control' placeholder='Inser your Email'/>
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input type='password' name='password' className='form-control' placeholder='Enter your password'/>
      </div>
      <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              name="rememberMe"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Not Registerd <a href="/signin">Register Now</a>
        </p>
    </form>
    </div>
    </div>
    
  )
}

export default UserLogin