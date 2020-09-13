import axios from "axios";
import { GET_POSTS } from "./types";

export const getPosts = async (param) => {
  const { page, postType } = param;

  const response = await axios.get(`/api/posts/${postType}/${page}/`);

  return {
    type: GET_POSTS,
    payload: response.data,
  };
};
