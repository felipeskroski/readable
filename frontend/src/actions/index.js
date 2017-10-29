import * as api from "../utils/api"

//get all categories
export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  api.getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
})

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const receiveCategories = (categories) =>({
  type: RECEIVE_CATEGORIES,
  categories
})

//---------------------------
//POSTS
//---------------------------
// get all posts
export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  api.getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

// get post
export const fetchPost = id => dispatch => {
  dispatch(requestPost())
  api.getPost(id)
    .then(post => dispatch(receivePost(post)))
}

export const REQUEST_POST = 'REQUEST_POST'
export const requestPost = () => ({
  type: REQUEST_POST
})

export const RECEIVE_POST = 'RECEIVE_POST'
export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

//vote post
export const fetchVotePost = (id, option) => dispatch =>
  api.votePost(id, option)
  .then(post => {
    console.log(post)
    dispatch(votedPost(post))
  })

export const VOTED_POST = 'VOTED_POST'
export const votedPost = (post) => ({
  type: VOTED_POST,
  post
})

//add post
export const fetchNewPost = post => dispatch =>
  api.addPost(post)
  .then(post => dispatch(addPost(post)))
export const ADD_POST = 'ADD_POST'
export const addPost = (post) => ({
  type: ADD_POST,
  post
})


//delete post
export const fetchDeletePost = id => dispatch =>
  api.deletePost(id)
  .then(post => dispatch(deletePost(id)))

export const DELETE_POST = 'DELETE_POST'
export const deletePost = id => ({
  type: DELETE_POST,
  id
})


// edit post
export const fetchUpdatePost = (id, post) => dispatch =>
  api.editPost(id, post).then(post => dispatch(editPost(post)))

export const EDIT_POST = 'EDIT_POST'
export const editPost = post => ({
  type: EDIT_POST,
  post
})


//---------------------------
//COMMENTS
//---------------------------

//Get comments by post
export const fetchComments = postId => dispatch =>
  api.getComments(postId).then(comments => dispatch(receiveComments(comments)))

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const requestComments = comments => ({
  type: REQUEST_COMMENTS,
})

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

//vote comment
export const fetchVoteComment = (id, option) => dispatch =>
  api.voteComment(id, option)
    .then(comment => dispatch(voteComment(comment)))

export const VOTE_COMMENT = 'VOTE_COMMENT'
export const voteComment = (comment) => ({
  type: VOTE_COMMENT,
  comment
})
