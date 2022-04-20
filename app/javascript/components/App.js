import React, {Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Edit from './pages/Edit'
import Index from './pages/Index'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import MyProfile from "./pages/MyProfile";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class App extends Component {
    constructor(props) {
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
        } = this.props


        return (
            <Router>
                <Header {...this.props}/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/home' component={Landing}/>
                    <Route path='/aboutus' component={About}/>
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
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}