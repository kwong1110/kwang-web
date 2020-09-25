import {
  GET_POSTS,
  CREATE_POST,
  EDIT_POST,
  GET_POST,
  CLEAR_POST,
  DELETE_POST,
  CLEAR_POSTS,
} from "../actions/types";

const initialState = {
  posts: { data: null, maxPage: 1 },
  post: { data: null },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
      };
    case EDIT_POST:
      return {
        ...state,
      };
    case DELETE_POST:
      return {
        ...state,
        post: initialState.post,
      };
    case CLEAR_POST:
      return {
        ...state,
        post: initialState.post,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: initialState.posts,
      };
    default:
      return state;
  }
}
