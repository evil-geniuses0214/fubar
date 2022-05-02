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
        <form className="register-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="d-flex align-items-center justify-content-center form-holder">
            <Form className="justify-content-center new-format text-center text-md-right">
              <div>
                <h1 className="register-heading">Profile Information</h1>
                <h2 className="register-text">
                  Fill out the form carefully for registration
                </h2>
              </div>
              <FormGroup>
                <Input
                    className="form-input"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    className="form-input"
                    name="picture"
                    placeholder="Add a Profile Picture URL"
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
                    placeholder="Service Branch"
                    onChange={this.handleChange}
                    value={this.state.branch_of_service}
                    style={{color: "grey"}}
                >
                  <option value="">Service Branch</option>
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
                    placeholder="Military Status"
                    onChange={this.handleChange}
                    value={this.state.military_status}
                    style={{color: "grey"}}
                >
                  <option value="" >Military Status</option>
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
                        placeholder="City"
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
                        placeholder="State"
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
                    placeholder="Favorite Beer"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.image}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    className="form-input"
                    name="duty_station"
                    placeholder="Duty Station"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.duty_station}
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label style={{ color: "#DADADAFF" }}>Service Start Date</Label>
                    <Input
                        className="form-input"
                        id="exampleDate"
                        name="date"
                        placeholder="Began Service Date"
                        type="date"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label style={{ color: "#DADADAFF" }}>End Date</Label>
                  <FormGroup>
                    <Input
                        id="exampleDate"
                        name="date"
                        placeholder="Service End Date"
                        type="date"
                        className="form-input"
                        style={{color: "grey"}}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                    className="form-input text-area"
                    name="about_me"
                    placeholder="Tell us about yourself"
                    type="textarea"
                    onChange={this.handleChange}
                    value={this.state.about_me}
                />
              </FormGroup>
              <Button
                  style={{ backgroundColor: "#000" }}
                  name="submit"
                  onClick={this.handleSubmit}
                  className="submit-btn"
              >
                SUBMIT
              </Button>
              {this.state.submitted && <Redirect to="/index" />}
            </Form>
          </div>
        </form>
    );
  }
}

export default Register;
