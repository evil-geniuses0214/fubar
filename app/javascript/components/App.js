import React, { Component } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Edit from './pages/Edit'
import Index from './pages/Index'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import MyProfile from "./pages/MyProfile";
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    this.readProfile()
  }

  readProfile = () => {
    fetch("/profiles")
    .then(response => response.json())
    .then(load => this.setState({profiles: load}))
    .catch(errors => console.log('Profile read errors:', errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)

    return(
      <Router>
        <Header {...this.props}/>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Landing} />
          <Route path='/aboutus' component={About} />

          {logged_in &&
              <Route path='/view/all'
                     render={props => <Index profiles={this.state.profiles}/>}
              />
          }
          {logged_in &&
              <Route path='/profile' component={MyProfile}/>
          }
          {logged_in &&
              <Route path='/profile/edit' component={Edit}/>
          }
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}