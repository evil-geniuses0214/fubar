import React, { Component } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

class PostList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    posts: null,
  };

  renderPosts = () => {
    return this.props.posts?.map((post) => {
      return (
        <div key={post.id}>
          <Card className="card-bg">
            <CardBody>
              <CardTitle className="post-color" tag="h5">
                {post.title}
              </CardTitle>
              <CardText>{post.content}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>What are you up to?</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default PostList;
