import React from "react";

const Comment = React.createClass({

  renderComment(comment , i){
   return(
      <div className = "comment" key={i}>
        <p>
          <strong> {comment.user}</strong>
          {comment.text}
          <button className = "remove-comment"
          onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} >&times; </button>
          </p>
      </div>
   );
  },


  handlesubmit(e){
    e.preventDefault();
    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    //alert(postId + author + comment);

    //inside props of this component in reactDevtools, we have a function called add comments (actioncreator)
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();

  },

  render(){
    return(
    <div className = "comments">
      {this.props.postComments.map(this.renderComment)}
      <form ref="commentForm" className = "comment-form" onSubmit={this.handlesubmit}>
        <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden/>
      </form>
    </div>
    );
  }
});
export default Comment;