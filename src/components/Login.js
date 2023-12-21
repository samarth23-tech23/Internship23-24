import React, { useState } from 'react';
import '../login.css';

const Login = () => {
  const [action, setAction] = useState('login');

  return (
    <div>
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <div className='text'>{action}</div>
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font"></i>
            </span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
              <input className="input100" type="text" name="email" placeholder='Enter Email' />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password" name="pass" placeholder='Enter Password' />
              <span className="focus-input100"></span>
            </div>

            <div className='btn-container'>
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <div
                  className={action === 'login' ? 'submit' : 'submit gray'}
                  onClick={() => setAction('login')}
                >
                  Login
                </div>
              </div>

              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <div
                  className={action === 'signup' ? 'submit brown' : 'submit gray'}
                  onClick={() => setAction('signup')}
                >
                  Sign Up
                </div>
              </div>
            </div><br />

            <div className="text-center p-t-115">
              <span className="txt1">
                Don’t have an account?
              </span>
              <a className="txt2" href="#">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
