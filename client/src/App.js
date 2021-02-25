/** @format */

import React, { Component } from 'react'
import Navigation from './components/navigation'
import Header from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Features from './components/Features'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Product from './product/Product'

//
// import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0'
import './assets/css/demo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import AdminLayout from 'layouts/Admin.js'
//

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/signin'>
              <Navigation />
              <SignIn />
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
            <Route
              path='/admin'
              render={(props) => <AdminLayout {...props} />}
            />
            <Route path='/product'>
              <Navigation />
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
