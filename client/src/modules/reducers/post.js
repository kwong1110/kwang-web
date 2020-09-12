import { GET_POSTS } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postData: action.payload,
      };
    default:
      return state;
  }
}
