import React, { Component } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Edit from './pages/Edit'
import Index from './pages/Index'
import Landing from './pages/Landing'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Show from './pages/Show'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/edit' component={Edit} />
          <Route path='/index' component={Index} />
          <Route path='/new' component={New} />
          <Route path='/notfound' component={NotFound} />
          <Route path='/register' component={Register} />
          <Route path='/show' component={Show} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}