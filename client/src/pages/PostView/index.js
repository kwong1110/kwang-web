import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPost, clearPost } from "../../modules/actions/post";
import { PostAction } from "../../organisms";

function PostView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { type, postId } = useParams();

  const { data } = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, postId]);

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
  if (!data) return null;
  return (
    <>
      {/* <PostAction
        submitAction={editHandler}
        actionName="수정"
        originData={data}
      /> */}
      <div>{data.title}</div>
      <div>{data.content}</div>
    </>
  );
}

export default PostView;
