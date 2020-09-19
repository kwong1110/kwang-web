import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../modules/actions/post";
import { PostAction } from "../../organisms";

function PostCreate() {
  const history = useHistory();
  const dispatch = useDispatch();
  const type = useParams().type;

  const createHandler = (body) => {
    dispatch(createPost(body, type)).then((response) => {
      if (response.payload.success) {
        alert("작성 성공");
        history.push("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  return (
    <>
      <PostAction submitAction={createHandler} actionName="작성" />
    </>
  );
}

export default PostCreate;
