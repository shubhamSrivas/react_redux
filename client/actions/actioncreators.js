// increment likes
export function increment(index){
  return{
    type : 'INCREMENT_LIKES',
    index
  }
}

//adding comments
export function addComment(postId, author, comment){
 // alert("adding");
  return{
    type : 'ADD_COMMENT',
    postId, author, comment
  }
}

//remove comments
export function removeComment(postId, i){
 // alert("removing");
  return{
    type: 'REMOVE_COMMENT',
    i, postId
  }
}