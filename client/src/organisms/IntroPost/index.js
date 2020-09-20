import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { Btn, ShadowDiv } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function IntroPost({ post, postId }) {
  const history = useHistory();

  const { title, content } = post;

  const postViewHandler = () => {
    history.push(`project/${postId}`);
  };

  return (
    <ShadowDiv>
      <S.IntroImg src={logo} onClick={postViewHandler} />
      <S.IntroTextBox>
        <S.IntroTitle onClick={postViewHandler}>{title}</S.IntroTitle>
        <Viewer initialValue={content} />
      </S.IntroTextBox>
      <S.IntroBtnBox>
        <Btn icon="update" color="gray">
          수정
        </Btn>
        <br />
        <Btn icon="delete" color="reject">
          삭제
        </Btn>
      </S.IntroBtnBox>
    </ShadowDiv>
  );
}

export default IntroPost;
