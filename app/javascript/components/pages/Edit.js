import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button, Row, Col } from "reactstrap";
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
      <>
        <form className="edit-form">
          <div className="d-flex align-items-center justify-content-center form-holder">
            <Form className="justify-content-center new-format text-center text-md-right">
              <div>
                <h1 className="register-heading">Edit Profile Information</h1>
                <h2 className="register-text">Click submit to make changes</h2>
              </div>
              <Form className="new-format">
                <FormGroup>
                  <Input
                    className="form-input"
                    name="name"
                    placeholder={profile.name}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-input"
                    name="picture"
                    placeholder={profile.picture}
                    type="url"
                    onChange={this.handleChange}
                    value={this.state.age}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    className="form-input"
                    id="exampleCustomSelect"
                    name="branch_of_service"
                    placeholder={profile.branch_of_service}
                    onChange={this.handleChange}
                    value={this.state.branch_of_service}
                    style={{ color: "grey" }}
                  >
                    <option value="" disabled selected hidden>
                      {profile.branch_of_service}
                    </option>
                    <option>Air force </option>
                    <option>Army</option>
                    <option>Coast Guard</option>
                    <option>Marine Corps</option>
                    <option>Navy</option>
                    <option>Space Force</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    className="form-input"
                    id="military_status"
                    name="military_status"
                    placeholder={profile.military_status}
                    onChange={this.handleChange}
                    value={this.state.military_status}
                    style={{ color: "grey" }}
                  >
                    <option value="" disabled selected hidden>
                      {profile.military_status}
                    </option>
                    <option>Active Duty </option>
                    <option>National Guard</option>
                    <option>Reserves</option>
                    <option>Retired</option>
                    <option>Veteran</option>
                  </Input>
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        className="form-input"
                        name="city"
                        placeholder={profile.city}
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.city}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        className="form-input"
                        name="state"
                        placeholder={profile.state}
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.image}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Input
                    className="form-input"
                    name="favorite_beer"
                    placeholder={profile.favorite_beer}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.image}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-input"
                    name="duty_station"
                    placeholder={profile.duty_station}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.duty_station}
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        className="form-input"
                        id="exampleDate"
                        name="date"
                        placeholder="Began Service Date"
                        type="date"
                        style={{ color: "grey" }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        id="exampleDate"
                        name="date"
                        placeholder="Service End Date"
                        type="date"
                        className="form-input"
                        style={{ color: "grey" }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Input
                    className="form-input text-area"
                    name="about_me"
                    placeholder={profile.about_me}
                    type="textarea"
                    onChange={this.handleChange}
                    value={this.state.about_me}
                  />
                </FormGroup>
                <Button
                  name="submit"
                  style={{ backgroundColor: "#000" }}
                  onClick={this.handleSubmit}
                >
                  Edit
                  {this.state.submitted && (
                    <Redirect to={`/profile/${profile.user_id}`} />
                  )}
                </Button>
                <NavLink to={`/profile/${profile.user_id}`}>
                  <Button style={{ backgroundColor: "#000" }}>Cancel</Button>
                </NavLink>
              </Form>
            </Form>
          </div>
        </form>
      </>
    );
  }
}
