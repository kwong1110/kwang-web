import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { ShadowDiv } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function IntroPost({ post, postId }) {
  const history = useHistory();

  const { title, content, imgPath } = post;

  const postViewHandler = () => {
    history.push(`/posts/project/${postId}`);
  };

  return (
    <ShadowDiv>
      <S.IntroImg src={imgPath || logo} onClick={postViewHandler} />
      <S.IntroTextBox>
        <S.IntroTitle onClick={postViewHandler}>{title}</S.IntroTitle>
        <Viewer initialValue={content} />
      </S.IntroTextBox>
    </ShadowDiv>
  );
}

export default IntroPost;
