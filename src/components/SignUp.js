/** @format */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

function SignUp(props) {
  let [Name, nameUpdated] = useState('')
  let [Email, emailUpdated] = useState('')
  let [Password, passwordUpdated] = useState('')
  let [Cpassword, cpasswordupdate] = useState('')
  let [Number, numberUpdated] = useState(null)
  let [information, onSubmit] = useState({
    name: '',
    email: '',
    password: '',
    mobile: null,
  })

  const call = (event) => {
    onSubmit({
      name: Name,
      email: Email,
      password: Password,
      password2: Cpassword,
      mobile: Number,
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
              <b>REGISTER</b>
            </h1>
            <input
              type='text'
              value={Name}
              onChange={(event) => nameUpdated((Name = event.target.value))}
              placeholder='Name'
            />
            <input
              type='email'
              value={Email}
              onChange={(event) => emailUpdated((Email = event.target.value))}
              placeholder='Email'
            />
            <input
              type='tel'
              value={Number}
              onChange={(event) => numberUpdated((Number = event.target.value))}
              placeholder='Phone Number'
            />
            <input
              type='password'
              value={Password}
              onChange={(event) =>
                passwordUpdated((Password = event.target.value))
              }
              placeholder='Password'
            />
            <input
              type='password'
              value={Cpassword}
              onChange={(event) =>
                cpasswordupdate((Cpassword = event.target.value))
              }
              placeholder='Confirm Password'
            />

            <Link to='/product'>
              <button type='submit'>SignUp</button>
            </Link>
            <p className='message'>
              <Link to='/login'>Got a account Sign In! </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
