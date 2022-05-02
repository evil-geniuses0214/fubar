import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

export default class Index extends Component {
  render() {
    let { profiles } = this.props;
    let { posts } = this.props;
    return (
        <div className="index-page">
          <div className="index-body">
        {profiles.map((profile) => {
          return (
              <Row className="index-padding" key={profile.id}>
                <img className="bg-profile-index" src={profile.picture}></img>
                <Card id="border-card">
                  <Card>
                    <div id="row" className="index-profile">
                      <NavLink className="profile" to={`/show/${profile.id}`}>
                        <CardImg id="circle-image" alt="safe-house" src={profile.picture}></CardImg>
                      </NavLink>
                      <CardTitle id="column">
                        <a id="name-style">{profile.name}</a>
                      </CardTitle>
                    </div>
                  </Card>
                  <span>Web Developer</span>
                </Card>
            </Row>
          );
        })}
        {/* {posts.map((post) => {
          return (
            <Row>
              {console.log(post.title)}
              <CardBody>
                {console.log(post.name)}
                <p>{post.title}</p>
                <p>{post.content}</p>
              </CardBody>
            </Row>
          );
        })} */}
      </div>
        </div>
    );
  }
}
