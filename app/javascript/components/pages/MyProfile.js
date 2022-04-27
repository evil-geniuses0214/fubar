import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Card, CardBody, CardText, Button, Row, Col} from "reactstrap";
import PostList from "./PostList";
import NewPost from "./NewPost";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  handleDelete = () => {
    this.props.deleteProfile(this.props.profile.id);
  };

  refetchData = async () => {
    const response = await fetch("/api/v1/posts")
    const data = await response.json()
    this.setState({
      posts: data,
    });
  }

  componentDidMount() {
    if (!this.state.posts) {
      fetch("/api/v1/posts")
          .then((posts) => posts.json())
          .then((posts) => {
            this.setState({
              posts: posts,
            });
          });
    }
  }

  render() {
    console.log(this.state)
    let { profile } = this.props;
    return (
      <div className="profile-margin">
        <Row>
          <Card>
            <div id="row">
              <img alt="Card image cap" src={profile?.picture} width="20%" />
              <CardBody id="column">
                <CardText className="profile-name">{profile.name}</CardText>
              </CardBody>
            </div>
          </Card>
          <br />
          <Card>
            <CardBody>
              <CardText>
                <h5>Service Branch: </h5>
                {profile.branch_of_service}
              </CardText>
            </CardBody>
            <CardBody>
              <CardText>
                <h5>Military Status: </h5>
                {profile.military_status}
              </CardText>
            </CardBody>
            <CardBody>
              <CardText>
                <h5>Service Branch: </h5>
                {profile.city}
              </CardText>
            </CardBody>
            <CardBody>
              <CardText>
                <h5>Service Branch: </h5>
                {profile.state}
              </CardText>
            </CardBody>
            <CardBody>
              <CardText>
                <h5>Favorite Beer: </h5>
                {profile.favorite_beer}
              </CardText>
            </CardBody>
            <CardBody>
              <CardText>
                <h5>Duty Station: </h5>
                {profile.duty_station}
              </CardText>
            </CardBody>
            <CardBody>
              <CardText>
                <h5>About Me: </h5>
                {profile.about_me}
              </CardText>
            </CardBody>
            <CardBody>
              <NavLink to="/index">
                <Button onClick={this.handleDelete}>Delete Profile</Button>
              </NavLink>
            </CardBody>
          </Card>
          <Col md={2}>
            <PostList posts = {this.state.posts} />
            <NewPost refetchData = {this.refetchData} />
          </Col>
        </Row>
      </div>
    );
  }
}
