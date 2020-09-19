import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../modules/actions/post";
import { PostAction } from "../../organisms";

function PostEdit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pNo, type } = useParams();

  const { data } = useSelector((state) => state.post.posts);

  const editHandler = (body) => {
    dispatch(createPost(body, type)).then((response) => {
      if (response.payload.success) {
        alert("수정 성공");
        history.push("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  return (
    <>
      <PostAction
        submitAction={editHandler}
        actionName="수정"
        originData={data[pNo]}
      />
    </>
  );
}

export default PostEdit;
