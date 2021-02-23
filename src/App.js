/** @format */

import React, { Component } from 'react'
import Navigation from './components/navigation'
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Features from './components/Features'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Product from './product/Product'

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/login'>
              <Navigation />
              <Login />
            </Route>
            <Route path='/signup'>
              <Navigation />
              <SignUp />
            </Route>
            <Route path='/features'>
              <Features />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/product'>
              <Product />
            </Route>
            <Route path='/'>
              <Navigation />
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
