import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Singlephoto = React.createClass({
  render() {

    const { posts, i, comments } = this.props;
    //console.log(posts.i);
    const { postId } = this.props.params;
    const index = this.props.posts.findIndex((posts) => posts.code === postId);
    const singlepost = this.props.posts[index];
    console.log(singlepost);

    return (
      <figure className="grid-figure" >
        <div className="grid-photo-wrap">
          <Link to={`/view/${this.props.params.postId}`} {...this.props}>
            <img src={singlepost.display_src} className="grid-photo"/>
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={singlepost.likes} className="likes-heart">
              {singlepost.likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{singlepost.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {singlepost.likes}</button>
            <Link className="button" to={`/view/${singlepost.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[singlepost.code] ? comments[singlepost.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
});

export default Singlephoto;