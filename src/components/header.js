/** @format */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <header id='header'>
          <div className='intro'>
            <div className='overlay'>
              <div>
                <div className='row'>
                  <div className='col-md-8 col-md-offset-2 intro-text'>
                    <h1>
                      BRIKMAN <span> </span>
                    </h1>
                    <p> JOIN US NOW! </p>
                    <Link to='/login'>
                      <button className='btn btn-login btn-lg page-scroll'>
                        LOGIN{' '}
                      </button>
                    </Link>
                    <Link to='/signup'>
                      <button className='btn btn-register btn-lg page-scroll'>
                        SIGNUP
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
