import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardText, Button, Row, Col } from "reactstrap";
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
    const response = await fetch("/api/v1/posts");
    const data = await response.json();
    this.setState({
      posts: data,
    });
  };
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
    console.log(this.state);
    let { profile } = this.props;
    return (
      <div className="profile-content">
        <div className="profile-margin profile-holder">
          <Row>
            <Card id="profile-card-holder">
              <div id="row" className="profile-bg">
                <div className="name-holder">
                  <img
                    className="profile-img"
                    alt="Card image cap"
                    src={profile?.picture}
                    width="50%"
                  />
                  <CardBody id="column">
                    <CardText className="profile-name">{profile.name}</CardText>
                  </CardBody>
                </div>
                <CardBody id="delete">
                  <NavLink to="/index">
                    <Button className="delete-btn" onClick={this.handleDelete}>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </Button>
                  </NavLink>
                </CardBody>
                <img
                  src="https://wallpaperaccess.com/full/51259.jpg"
                  alt=""
                  className="profile-cover"
                />{" "}
                alt="" className="profile-cover" />
              </div>
            </Card>
            <br />
            <Card id="services_holder">
              <h1>Service</h1>
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
            </Card>
            <Card id="about_me">
              <h1>About Me: </h1>
              <CardBody>
                <CardText>{profile.about_me}</CardText>
              </CardBody>
            </Card>
            <Card id="services_holder">
              <CardBody>
                <CardText>
                  <h5>Duty Station: </h5>
                  {profile.duty_station}
                </CardText>
              </CardBody>
              <CardBody>
                <CardText>
                  <h5>Service City: </h5>
                  {profile.city}
                </CardText>
              </CardBody>
              <CardBody>
                <CardText>
                  <h5>Service State: </h5>
                  {profile.state}
                </CardText>
              </CardBody>
              <CardBody>
                <CardText>
                  <h5>Favorite Beer: </h5>
                  {profile.favorite_beer}
                </CardText>
              </CardBody>
            </Card>
            <Card id="update_status">
              <CardBody>
                <CardText>
                  <Col md={12}>
                    <PostList posts={this.state.posts} />
                    <NewPost refetchData={this.refetchData} />
                  </Col>
                </CardText>
              </CardBody>
            </Card>
          </Row>
        </div>
      </div>
    );
  }
}
