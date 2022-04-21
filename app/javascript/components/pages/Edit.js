import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

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
    let { newProfile } = this.state;
    newProfile[e.target.name] = e.target.value;
    this.setState({ newProfile: newProfile });
  };

  handleSubmit = () => {
    this.props.updateProfile(this.state.newProfile, this.props.profile.id);
    this.setState({ submitted: true });
  };

  render() {
    let { newProfile } = this.state;
    return (
      <div>
        <Form className="new-format">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              name="name"
              placeholder="Crytpo Name?"
              type="text"
              onChange={this.handleChange}
              value={newProfile.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="picture">Image</Label>
            <Input
              name="picture"
              placeholder="How long is it being developed?"
              type="url"
              onChange={this.handleChange}
              value={newProfile.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="branch_of_service">Service Branch</Label>
            <Input
              name="branch_of_service"
              placeholder="Name the creator."
              type="text"
              onChange={this.handleChange}
              value={newProfile.creator}
            />
          </FormGroup>
          <FormGroup>
            <Label for="military_status">Military Status</Label>
            <Input
              name="military_status"
              placeholder="Show me that coin."
              type="text"
              onChange={this.handleChange}
              value={newProfile.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              name="city"
              placeholder="Show me that coin."
              type="text"
              onChange={this.handleChange}
              value={newProfile.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              name="state"
              placeholder="Show me that coin."
              type="text"
              onChange={this.handleChange}
              value={newProfile.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="favorite_beer">favorite_beer</Label>
            <Input
              name="favorite_beer"
              placeholder="Show me that coin."
              type="text"
              onChange={this.handleChange}
              value={newProfile.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="duty_station">duty_station</Label>
            <Input
              name="duty_station"
              placeholder="Show me that coin."
              type="text"
              onChange={this.handleChange}
              value={newProfile.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="about_me">about_me</Label>
            <Input
              name="about_me"
              placeholder="Show me that coin."
              type="text"
              onChange={this.handleChange}
              value={newProfile.image}
            />
          </FormGroup>
          <Button
            style={{ backgroundColor: "#39535c" }}
            name="submit"
            onClick={this.handleSubmit}
          >
            Edit
            {this.state.submitted && (
              <Redirect to={`/show/${this.props.profile.id}`} />
            )}
          </Button>
        </Form>
      </div>
    );
  }
}
