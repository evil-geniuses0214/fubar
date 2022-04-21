import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import MyProfile from "./pages/MyProfile";
import Show from "./pages/Show";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }

  componentDidMount() {
    this.readProfile();
  }

  readProfile = () => {
    fetch("/profiles")
      .then((response) => response.json())
      .then((load) => this.setState({ profiles: load }))
      .catch((errors) => console.log("Profile read errors:", errors));
  };

  createProfile = (newProfile) => {
    fetch("/profiles", {
      body: JSON.stringify(newProfile),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.readProfile())
      .catch((errors) => console.log("Profile create errors:", errors));
  };

  updateProfile = (profile, id) => {
    fetch(`/profiles/${id}`, {
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readProfile())
      .catch((errors) => console.log("Profile error:", errors));
  };

  deleteProfile = (id) => {
    fetch(`/profiles/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.readProfile())
      .catch((errors) => console.log("Profile error:", errors));
  };

  render() {
    const { logged_in } = this.props;

    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          {/* HOME */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Landing} />

          {/* ABOUT US */}
          <Route path="/aboutus" component={About} />

          {/* INDEX */}
          {logged_in && (
            <Route
              path="/index"
              render={(props) => <Index profiles={this.state.profiles} />}
            />
          )}

          {/* MY PROFILE */}
          {logged_in && (
            <Route
              path="/profile/:id"
              render={(props) => {
                let id = props.match.params.id;
                let profile = this.state.profiles.find(
                  (profile) => profile.user_id === +id
                );
                console.log(profile);
                return <MyProfile profile={profile} />;
              }}
            />
          )}

          {/* EDIT PROFILE */}
          {logged_in && (
            <Route
              path="/profileedit/:id"
              render={(props) => {
                let id = props.match.params.id;
                let profile = this.state.profiles.find(
                  (profile) => profile.user_id === +id
                );
                console.log(profile);
                return (
                  <Edit updateProfile={this.updateProfile} profile={profile} />
                );
              }}
            />
          )}

          {/* SHOW PROFILE */}
          <Route
            path="/show/:id"
            render={(props) => {
              let id = props.match.params.id;
              let profile = this.state.profiles.find(
                (profile) => profile.id === +id
              );
              console.log(profile);
              return (
                <Show profile={profile} deleteProfile={this.deleteProfile} />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
