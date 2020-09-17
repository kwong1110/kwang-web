import axios from "axios";
import { GET_POSTS, CREATE_POST } from "./types";

export const getPosts = async (param) => {
  const { page, postType } = param;

  const response = await axios.get(`/api/posts/${postType}/${page}`);

  return {
    type: GET_POSTS,
    payload: response.data,
  };
};

export const createPost = async (body, param) => {
  const response = await axios.post(`/api/posts/${param}/create`, body);

  return {
    type: CREATE_POST,
    payload: response.data,
  };
};
