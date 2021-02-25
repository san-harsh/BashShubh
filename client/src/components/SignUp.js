/** @format */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'
import { signup } from '../auth/helper'

function SignUp(props) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  })

  const { name, email, password, error, success } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false })
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true,
          })
        }
      })
      .catch(console.log('Error in signup'))
  }
  const successMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-success'
            style={{ display: success ? '' : 'none' }}
          >
            New account was created successfully. Please{' '}
            <Link to='/signin'>Login Here</Link>
          </div>
        </div>
      </div>
    )
  }

  const errorMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-danger'
            style={{ display: error ? '' : 'none' }}
          >
            {error}
          </div>
        </div>
      </div>
    )
  }

  const SignUpForm = () => {
    return (
      <div className='login-page'>
        <div className='form'>
          <form className='login-form'>
            <h1 className='SignIn'>
              <b>REGISTER</b>
            </h1>
            <input
              type='text'
              value={name}
              onChange={handleChange('name')}
              placeholder='Name'
            />
            <input
              type='email'
              value={email}
              onChange={handleChange('email')}
              placeholder='Email'
            />

            <input
              type='password'
              value={password}
              onChange={handleChange('password')}
              placeholder='Password'
            />

            {/* 

        <input
        type='tel'
        value={Number}
        onChange={(event) => numberUpdated((Number = event.target.value))}
        placeholder='Phone Number'
      />

        <input
          type='password'
          value={Cpassword}
          onChange={(event) =>
            cpasswordupdate((Cpassword = event.target.value))
          }
          placeholder='Confirm Password'
        />
        */}

            <Link to='/product'>
              <button onClick={onSubmit} type='submit'>
                SignUp
              </button>
            </Link>
            <p className='message'>
              <Link to='/signin'>Got a account Sign In! </Link>
            </p>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      {successMessage()}
      {errorMessage()}
      {SignUpForm()}
    </>
  )
}

export default SignUp
