import { GET_POSTS } from "../actions/types";

const initialState = {
  data: { posts: null },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
