import React, { Component } from "react";
import { Card, CardBody, CardText } from "reactstrap";

export default class Show extends Component {
  render() {
    let { profile } = this.props;
    return (
      <div className="show-body">
        <Card>
          <img alt="Card image cap" src={profile.picture} width="20%" />
          <CardBody>
            <CardText>{profile.name}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
