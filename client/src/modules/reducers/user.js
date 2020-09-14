import { LOGIN_USER, AUTH_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  userData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        success: action.payload,
      };
    case AUTH_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
}
