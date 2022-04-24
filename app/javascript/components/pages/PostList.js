import React, { Component } from 'react'
import { NavLink,Link } from 'react-router-dom'
import {Card, CardBody, CardText, CardTitle} from "reactstrap";

class PostList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('/api/v1/posts')
            .then(posts => posts.json())
            .then(posts => {
                this.setState({
                    posts: posts
                })
            })
    }

    renderPosts = () => {
        return this.state.posts.map(post => {
            return (
                <div key={post.id}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                {post.title}
                            </CardTitle>
                            <CardText>
                                {post.content}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
              <h1>
                What are you up to?
              </h1>
                {this.renderPosts()}
                <Link to="/posts/new">New Post</Link>
            </div>
        )
    }
}

export default PostList