import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Card, CardBody, CardText, Button, Row, Col} from "reactstrap";
import MyStatus from './PostList'
import EditPost from "./NewPost";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete = () => {
    this.props.deleteProfile(this.props.profile.id);
  };

  render() {
    let { profile } = this.props;
    return (
      <div className="show-body">
        <Row>
          <Col md={4}>
        <Card>
          <img alt="Card image cap" src={profile.picture} width="20%" />
          <CardBody>
            <CardText>{profile.name}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.branch_of_service}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.military_status}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.city}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.state}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.favorite_beer}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.duty_station}</CardText>
          </CardBody>
          <CardBody>
            <CardText>{profile.about_me}</CardText>
          </CardBody>
          <CardBody>
            <NavLink  to={`/profileedit/${profile.id}`}>
              <Button onClick={this.handleSubmit}>Edit Profile</Button>
            </NavLink>
            <NavLink to="/index">
              <Button onClick={this.handleDelete}>Delete Profile</Button>
            </NavLink>
          </CardBody>
        </Card>
        </Col>
          <Col md={2}>
            <MyStatus />
            <EditPost />
          </Col>
        </Row>
      </div>
    );
  }
}
