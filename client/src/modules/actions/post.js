import axios from "axios";
import { GET_POSTS } from "./types";

export function getPosts(body) {
  const request = axios
    .post("/api/posts/", body)
    .then((response) => response.data);

  return {
    type: GET_POSTS,
    payload: request,
  };
}
