import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProfile: {
        name: "",
        picture: "",
        branch_of_service: "",
        military_status: "",
        city: "",
        state: "",
        favorite_beer: "",
        duty_station: "",
        about_me: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { newProfile } = this.state;
    newProfile[e.target.name] = e.target.value;
    this.setState({ newProfile: newProfile });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    // let data = { post: this.state };
    // let token = document.querySelector('meta[name="csrf-token"]').content;
    // fetch("/profiles", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-Requested-With": "XMLHttpRequest",
    //     "X-CSRF-Token": token,
    //   },
    //   redirect: "error",
    //   body: JSON.stringify(this.state),
    // })
    //   .then((resp) => {
    //     resp.json();
    //   })
    //   .then((post) => {
    //     this.props.history.push("/index");
    //   });
    this.props.createProfile(this.state.newProfile);
    this.setState({ submitted: true });
  };

  render() {
    const { current_user } = this.props;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <Form className="new-format">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                name="name"
                placeholder="Crytpo Name?"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="picture">Image</Label>
              <Input
                name="picture"
                placeholder="How long is it being developed?"
                type="url"
                onChange={this.handleChange}
                value={this.state.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="branch_of_service">Service Branch</Label>
              <Input
                name="branch_of_service"
                placeholder="Name the creator."
                type="text"
                onChange={this.handleChange}
                value={this.state.creator}
              />
            </FormGroup>
            <FormGroup>
              <Label for="military_status">Military Status</Label>
              <Input
                name="military_status"
                placeholder="Show me that coin."
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                name="city"
                placeholder="Show me that coin."
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                name="state"
                placeholder="Show me that coin."
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="favorite_beer">favorite_beer</Label>
              <Input
                name="favorite_beer"
                placeholder="Show me that coin."
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="duty_station">duty_station</Label>
              <Input
                name="duty_station"
                placeholder="Show me that coin."
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="about_me">about_me</Label>
              <Input
                name="about_me"
                placeholder="Show me that coin."
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <Button
              style={{ backgroundColor: "#39535c" }}
              name="submit"
              onClick={this.handleSubmit}
            >
              submit
            </Button>
            {this.state.submitted && <Redirect to="/index" />}
          </Form>
        </div>
      </form>
    );
  }
}

export default Register;
