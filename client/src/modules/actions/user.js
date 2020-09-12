import axios from "axios";
import { LOGIN_USER, AUTH_USER, LOGOUT_USER } from "./types";

// Flux Standard Action (FSA 규칙)
// 유틸 함수를 만들때 유용하다
// 규칙1 : 모든 action의 추가 적인 값을 payload로 통일
// 규칙2 : 에러 발생 할 때엔 error를 true로 수정한다.

export function loginUser(body) {
  const request = axios
    .post("/api/users/login", body)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get("/api/users/logout")
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
