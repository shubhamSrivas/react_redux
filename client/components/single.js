import React from 'react';
import Photo from './photo';
import Comment from "./comments";

// import comments

const Single = React.createClass({
  render() {

    //index of the post

    const {postId} = this.props.params;

    const i = this.props.posts.findIndex(
      (posts) => posts.code === this.props.params.postId );
      const singlepost = this.props.posts[i];
      console.log(singlepost);

      const postComments = this.props.comments[postId] || [];

    return (
      <div className = "single-photo">
        <Photo i={i} singlepost={singlepost} {...this.props}/>
        <Comment  postComments = {postComments} {...this.props} />
      </div>
    )
  }
});
export default Single;