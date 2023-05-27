import { React, useRef } from "react";
import {AiOutlineUser, AiOutlineClose} from "react-icons/ai";
import './login.css';
const Login = () => {
  const sideLogin = useRef()
  const closeSideLogin = useRef()
  const showLoginSlide = () => {
    sideLogin.current.classList.add('active-login-slide')
    closeSideLogin.current.classList.add('active-login-slide')
  }
  const closeLoginSlide = () => {
    sideLogin.current.classList.remove('active-login-slide')
    closeSideLogin.current.classList.remove('active-login-slide')
  }
  return (
    <>
      <button type="button" className="otherbutton" onClick={showLoginSlide}>
        <AiOutlineUser />
      </button>
      <div className='login-side2' ref={closeSideLogin}></div>
      <div className='login-side' ref={sideLogin}>
        <div className='header-list'>
          <button type='button' className="close" onClick={closeLoginSlide}><AiOutlineClose />Close</button>
        </div>
        <h3 className='heading-text'>Sign in</h3>
        <form className='login-form'>
          <div className='login-box'>
            <label for="email">email address</label>
        	  <input type="email" id="email" placeholder='Email Address'/>
        	</div>
          <div className='login-box'>
            <label for="password">password</label>
        	  <input type="password" id="password" placeholder='password'/>
        	</div>
        	<button type='submit' className='submit-login'>submit</button>
        </form>
        <a href='' className='forgetPass'>forgot your password?</a>
        <button type='button' className='signupButton'>create an account</button>
        
      </div>
    </>
  );
};


export default Login