import React, { Component } from "react";
import {
  CustomInput,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
} from "reactstrap";
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
    this.props.createProfile(this.state.newProfile);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="border d-flex align-items-center justify-content-center">
          <Form className="justify-content-center new-format text-center text-md-right w-25">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                className="text-center"
                name="name"
                placeholder="Enter you name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="picture">Picture URL</Label>
              <Input
                className="text-center"
                name="picture"
                placeholder="Add a Profile Picture"
                type="url"
                onChange={this.handleChange}
                value={this.state.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="branch_of_service">Service Branch</Label>
              <Input
                type="select"
                className="text-center"
                id="exampleCustomSelect"
                name="branch_of_service"
                placeholder="Service Branch"
                onChange={this.handleChange}
                value={this.state.branch_of_service}
              >
                <option value="">Select</option>
                <option>Air force </option>
                <option>Army</option>
                <option>Coast Guard</option>
                <option>Marine Corps</option>
                <option>Navy</option>
                <option>Space Force</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="military_status">Military Status</Label>
              <Input
                type="select"
                className="text-center"
                id="military_status"
                name="military_status"
                placeholder="Military Status"
                onChange={this.handleChange}
                value={this.state.military_status}
              >
                <option value="">Select</option>
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
                  <Label for="city">City</Label>
                  <Input
                    className="text-center"
                    name="city"
                    placeholder="-"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.city}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    className="text-center"
                    name="state"
                    placeholder="-"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.image}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="favorite_beer">Beer of Choice</Label>
              <Input
                className="text-center"
                name="favorite_beer"
                placeholder="-"
                type="text"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="duty_station">Duty Station</Label>
              <Input
                className="text-center"
                name="duty_station"
                placeholder="-"
                type="text"
                onChange={this.handleChange}
                value={this.state.duty_station}
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="about_me">About Me</Label>
              <Input
                className="text-center"
                name="about_me"
                placeholder="Tell us about yourself"
                type="textarea"
                onChange={this.handleChange}
                value={this.state.about_me}
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
