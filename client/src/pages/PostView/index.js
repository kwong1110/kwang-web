import React, { useEffect } from "react";
import * as S from "./style";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPost, clearPost } from "../../modules/actions/post";
import { PostAction } from "../../organisms";
import { ShadowDiv, DefaultForm, Btn } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor, Viewer } from "@toast-ui/react-editor";

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
      <ShadowDiv>
        <DefaultForm>
          <S.PostTitleBox>
            <S.PostTitle>{data.title}</S.PostTitle>
            <div>
              <Btn type="button" icon="update" color="gray">
                수정
              </Btn>
              <Btn type="button" icon="delete" color="reject">
                삭제
              </Btn>
            </div>
          </S.PostTitleBox>
          <S.PostContentBox>
            <S.PostMainImg src={data.imgPath} alt="postMainImage" />
            <Viewer initialValue={data.content} />
          </S.PostContentBox>
        </DefaultForm>
      </ShadowDiv>
      {/* <PostAction
        submitAction={editHandler}
        actionName="수정"
        originData={data}
      /> */}
      {/* <Btn type="submit" style={{ marginTop: "1.5rem" }}>
            작성완료
          </Btn> */}
    </>
  );
}

export default PostView;
