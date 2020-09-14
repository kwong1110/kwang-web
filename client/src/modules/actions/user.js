import axios from "axios";
import { LOGIN_USER, AUTH_USER, LOGOUT_USER } from "./types";

// Flux Standard Action (FSA 규칙)
// 유틸 함수를 만들때 유용하다
// 규칙1 : 모든 action의 추가 적인 값을 payload로 통일
// 규칙2 : 에러 발생 할 때엔 error를 true로 수정한다.

export const loginUser = async (body) => {
  const response = await axios.post("/api/users/login", body);

  return {
    type: LOGIN_USER,
    payload: response.data,
  };
};

export const auth = async () => {
  const response = await axios.get("/api/users/auth");

  return {
    type: AUTH_USER,
    payload: response.data,
  };
};

export const logoutUser = async () => {
  const response = await axios.get("/api/users/logout");

  return {
    type: LOGOUT_USER,
    payload: response.data,
  };
};
