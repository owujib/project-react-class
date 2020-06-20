import React, { Component } from 'react';
import axios from 'axios';
import BlogData from './BlogData';

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.posts.map(post => {
          return <BlogData key={post.id} posts={post} />;
        })}
      </div>
    );
  }
}

export default Blog;
