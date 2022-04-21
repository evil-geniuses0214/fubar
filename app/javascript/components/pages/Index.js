import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

export default class Index extends Component {
  render() {
    let { profiles } = this.props;
    return (
      <div className="index-body">
        <h1>Index</h1>
        {profiles &&
          profiles.map((profile) => {
            return (
              <Row className="index-padding" key={profile.id}>
                <Col>
                  <Card>
                    <NavLink to={`/show/${profile.id}`}>
                      <CardImg alt="safe-house" src={profile.picture}></CardImg>
                    </NavLink>
                    <CardTitle tag="h5">{profile.name}</CardTitle>
                    <CardBody>
                      <p>{profile.branch_of_service}</p>
                      <p>{profile.about_me}</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}
      </div>
    );
  }
}
