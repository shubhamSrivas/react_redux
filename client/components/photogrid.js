import React from 'react';
import Photo from './photo'
const Photogrid = React.createClass({
  render() {
    return (
      <div className = "photo-grid">
    {this.props.posts.map((posts,i) => <Photo{
      ...this.props } key = {i} i =  {i}  posts={posts}/>)}
      </div>
    )
  }
});
export default Photogrid;