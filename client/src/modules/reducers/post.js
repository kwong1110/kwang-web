import { GET_POSTS, CREATE_POST, EDIT_POST } from "../actions/types";

const initialState = {
  posts: { data: null, maxPage: 1 },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
      };
    case EDIT_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
