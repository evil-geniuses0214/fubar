import React, { Component }               from 'react'
import { NavLink,Link }                           from 'react-router-dom'

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
                <div key={post.id}><NavLink to={`/postshow/${post.id}`}><p>{post.title}</p></NavLink>
                    {post.content}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                PostList Component
                {this.renderPosts()}
                <Link to="/posts/new">Add a New Post</Link>
            </div>
        )
    }
}

export default PostList