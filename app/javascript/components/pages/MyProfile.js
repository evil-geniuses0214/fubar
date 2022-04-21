import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardText, Button } from "reactstrap";

export default class MyProfile extends Component {
  handleSubmit = () => {
    this.props.deleteProfile(this.props.profile.id);
  };
  render() {
    let { profile } = this.props;
    return (
      <div className="show-body">
        <Card>
          <img alt="Card image cap" src={profile.picture} width="20%" />
          <CardBody>
            <CardText>{profile.name}</CardText>
          </CardBody>
          <CardBody>
            <NavLink to="/index">
              <Button onClick={this.handleSubmit}>Delete Profile</Button>
            </NavLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}
