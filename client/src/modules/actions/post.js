import axios from "axios";
import { GET_POSTS } from "./types";

export function getPosts(body) {
  const { page, postType } = body;
  const request = axios
    .get(`/api/posts/${postType}/${page}/`)
    .then((response) => response.data);

  return {
    type: GET_POSTS,
    payload: request,
  };
}
