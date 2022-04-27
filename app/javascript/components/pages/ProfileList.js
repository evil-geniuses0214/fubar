import  React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProfileList extends Component {
    state = {
        profiles: []
    }

    componentDidMount() {
        fetch('/profiles')
            .then(profiles => profiles.json())
            .then(profiles => {
                this.setState({
                    profiles: profiles
                })
            })
    }

    renderProfiles = () => {
        return this.state.profiles.map(profile => {
            return (
                <div key={profile.id}>
                    {profile.name} - {profile.state}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                ProfileList Component
                {this.renderProfiles()}
                <Link to="/create-profile">Add a New Post</Link>
            </div>
        )
    }
}

export default ProfileList
