import React from 'react';
import Singlephoto from './singlephoto';
import Comment from "./comments";

const Single = React.createClass({
  render() {

    const {postId} = this.props.params;
    const i = this.props.posts.findIndex((posts) => posts.code === postId );
    const singlepost = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className = "single-photo">
        <Singlephoto i={i} singlepost={singlepost} {...this.props}/>
        <Comment  postComments = {postComments} {...this.props} />
      </div>
    )
  }
});
export default Single;