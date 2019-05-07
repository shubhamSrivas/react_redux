import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render(){

    //console.log(this.props);
    const { posts, i, comments } = this.props;
    //console.log(posts);

    return(
      <figure className = "grid-figure" >
      <div className = "grid-photo-wrap">
          <Link to={`/view/${posts.code}`} {...this.props}>
        <img src = {posts.display_src} alt = {posts.caption}
         className = "grid-photo"/>
      </Link>

     <CSSTransitionGroup transitionName = "like"
         transitionEnterTimeout = {500}
            transitionLeaveTimeout={500}>
            <span key = {posts.likes} className = "likes-heart">
            {posts.likes}
            </span>
            </CSSTransitionGroup>
      </div>
      <figcaption>
        <p>{posts.caption}</p>
        <div className="control-buttons">
           <button onClick={this.props.increment.bind(null , i)} className="likes">&hearts; {posts.likes}</button>
           <Link className="button" to={`/view/${posts.code}`}>
               <span className= "comment-count">
                 <span className="speech-bubble"></span>
                  {comments[posts.code] ? comments[posts.code].length : 0}
                 </span>
           </Link>
           </div>
           </figcaption>
      </figure>
    )
  }
});

export default Photo;