/** @format */

import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'

import { signin, authenticate, isAutheticated } from "../auth/helper";

function SignIn(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            })
           ;
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 0) {
        return <Redirect to ='/product'/>
      } else {
        return <Redirect to ='/dashboard'/>
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/product" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div >
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div >
          <div
          
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };




  const SignInForm =()=>{
    return (
      <div className='login-page'>
        <div className='form'>
          <form className='login-form'>
            <h1 className='SignIn'>
              <b>Sign In</b>
            </h1>
            <input
              type='email'
              value={email}
              onChange={handleChange("email")}
              placeholder='Email'
            />
            <input
              type='password'
              value={password}
              onChange={handleChange("password")}
              placeholder='Password'
            />
            
              <button onClick={onSubmit} type='submit'>Sign In!</button>
          

            <p className='message'>
              <Link to='/signup'>Not have an account Sign Up! </Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
 
  return (
    <>
    {loadingMessage()}
    {errorMessage()}
    {SignInForm()}
    {performRedirect()}
      
    </>
  )
}

export default SignIn
