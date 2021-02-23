/** @format */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

function Login(props) {
  let [Email, emailUpdated] = useState('')
  let [Password, passwordUpdated] = useState('')
  let [information, onSubmit] = useState({
    email: '',
    password: '',
  })

  const call = (event) => {
    onSubmit({
      email: Email,
      password: Password,
    })
    event.preventDefault()
    console.log(information)
  }
  return (
    <>
      <div className='login-page'>
        <div className='form'>
          <form className='login-form'>
            <h1 className='SignIn'>
              <b>LOGIN</b>
            </h1>
            <input
              type='email'
              value={Email}
              onChange={(event) => emailUpdated((Email = event.target.value))}
              placeholder='Email'
            />
            <input
              type='password'
              value={Password}
              onChange={(event) =>
                passwordUpdated((Password = event.target.value))
              }
              placeholder='Password'
            />
            <Link to='/product'>
              <button type='submit'>Login</button>
            </Link>

            <p className='message'>
              <Link to='/signup'>Not have an account Sign Up! </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
