import { GET_POSTS } from "../actions/types";

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
    default:
      return state;
  }
}
