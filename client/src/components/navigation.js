/** @format */

import React, { Component } from 'react'

export class Navigation extends Component {
  render() {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand page-scroll' href='/'>
              BRIKMAN
            </a>
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='/features' className='page-scroll'>
                  Features
                </a>
              </li>
              <li>
                <a href='/about' className='page-scroll'>
                  About
                </a>
              </li>
              <li>
                <a href='/services' className='page-scroll'>
                  Services
                </a>
              </li>
              <li>
                <a href='/contact' className='page-scroll'>
                  Contact
                </a>
              </li>
              <li>
                <a href='/dashboard' className='page-scroll'>
                  DashBoard
                </a>
              </li>
              <li>
                <a href='/admin' className='page-scroll'>
                  Admin
                </a>
              </li>
              <li>
                <button className='btn btn-warning btn-signout'>LOGOUT</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation