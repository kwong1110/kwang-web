import axios from "axios";
import {
  GET_POSTS,
  CREATE_POST,
  EDIT_POST,
  GET_POST,
  CLEAR_POST,
} from "./types";

export const getPosts = async (param) => {
  const { postType, page } = param;

  const response = await axios.get(`/api/posts/${postType}/${page}`);

  return {
    type: GET_POSTS,
    payload: response.data,
  };
};

export const getPost = async (postId) => {
  const response = await axios.get(`/api/posts/${postId}`);

  return {
    type: GET_POST,
    payload: response.data,
  };
};

export const createPost = async (body, param) => {
  const response = await axios.post(`/api/posts/${param}`, body);

  return {
    type: CREATE_POST,
    payload: response.data,
  };
};

export const editPost = async (body, param) => {
  const response = await axios.put(`/api/posts/${param}/edit`, body);

  return {
    type: EDIT_POST,
    payload: response.data,
  };
};

export const clearPost = () => {
  return { type: CLEAR_POST };
};
