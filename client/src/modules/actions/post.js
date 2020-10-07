import axios from "axios";
import {
  GET_POSTS,
  CREATE_POST,
  EDIT_POST,
  GET_POST,
  CLEAR_POST,
  DELETE_POST,
} from "./types";

export const getPosts = async (param) => {
  const { postType, page } = param;

  const response = await axios.get(`/posts/${postType}/${page}`);

  return {
    type: GET_POSTS,
    postType: response.data.postType,
    payload: response.data,
  };
};

export const getPost = async (postId) => {
  const response = await axios.get(`/posts/${postId}`);

  return {
    type: GET_POST,
    payload: response.data,
  };
};

export const createPost = async (body, param) => {
  const response = await axios.post(`/posts/${param}`, body);

  return {
    type: CREATE_POST,
    payload: response.data,
  };
};

export const editPost = async (body, postId) => {
  const response = await axios.put(`/posts/${postId}`, body);

  return {
    type: EDIT_POST,
    payload: response.data,
  };
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`/posts/${postId}`);

  return {
    type: DELETE_POST,
    payload: response.data,
  };
};

export const clearPost = () => {
  return { type: CLEAR_POST };
};
