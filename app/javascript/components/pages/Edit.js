import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import { Redirect, NavLink } from "react-router-dom";

export default class Edit extends Component {
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
    let { profile } = this.props;
    profile[e.target.name] = e.target.value;
    this.setState({ newProfile: profile });
  };

  handleSubmit = () => {
    this.props.updateProfile(this.state.newProfile, this.props.profile.id);
    this.setState({ submitted: true });
  };

  render() {
    let { profile } = this.props;
    return (
      <div>
        <Form className="new-format">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={profile.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="picture">Image</Label>
            <Input
              name="picture"
              type="url"
              onChange={this.handleChange}
              value={profile.picture}
            />
          </FormGroup>
          <FormGroup>
            <Label for="branch_of_service">Service Branch</Label>
            <Input
              name="branch_of_service"
              type="text"
              onChange={this.handleChange}
              value={profile.branch_of_service}
            />
          </FormGroup>
          <FormGroup>
            <Label for="military_status">Military Status</Label>
            <Input
              name="military_status"
              type="text"
              onChange={this.handleChange}
              value={profile.military_status}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              name="city"
              type="text"
              onChange={this.handleChange}
              value={profile.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              name="state"
              type="text"
              onChange={this.handleChange}
              value={profile.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="favorite_beer">favorite_beer</Label>
            <Input
              name="favorite_beer"
              type="text"
              onChange={this.handleChange}
              value={profile.favorite_beer}
            />
          </FormGroup>
          <FormGroup>
            <Label for="duty_station">duty_station</Label>
            <Input
              name="duty_station"
              type="text"
              onChange={this.handleChange}
              value={profile.duty_station}
            />
          </FormGroup>
          <FormGroup>
            <Label for="about_me">about_me</Label>
            <Input
              name="about_me"
              type="text"
              onChange={this.handleChange}
              value={profile.about_me}
            />
          </FormGroup>
          <Button
            style={{ backgroundColor: "#39535c" }}
            name="submit"
            onClick={this.handleSubmit}
          >
            Edit
            {this.state.submitted && <Redirect to={`/profile/${profile.id}`} />}
          </Button>
          <NavLink to={`/profile/${profile.id}`}>
            <Button style={{ backgroundColor: "#39535c" }}>Cancel</Button>
          </NavLink>
        </Form>
      </div>
    );
  }
}
