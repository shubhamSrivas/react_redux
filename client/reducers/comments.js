function postComments(state=[], action){
 switch(action.type){
   // In case if adding comments
    case 'ADD_COMMENT':
    return [...state, {
    user: action.author,
    text: action.comment
    }];

   // IN CASE OF REMOVING COMMENTS
    case "REMOVE_COMMENT":
    //alert("removing");
    return[
      ...state.slice(0, action.i),
      ...state.slice(action.i+1)
    ];

  // In default case
    default: return state;
  }
  return state;
 }

function comments(state = [], action) {
  //console.log(state, action);
  if(typeof action.postId !== 'undefined'){
     return {
       ...state,
       [action.postId] : postComments(state[action.postId], action)
     }
  }
  return state;
}

export default comments;