import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { Btn } from "..";
import ShadowDiv from "../ShadowDiv";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function IntroPost({ post, pNo }) {
  const history = useHistory();

  const { title, content } = post;

  const postUpdateHandler = () => {
    history.push(`project/edit/${pNo}`);
  };

  return (
    <ShadowDiv>
      <S.IntroImg src={logo} />
      <S.IntroTextBox>
        <S.IntroTitle>{title}</S.IntroTitle>
        <Viewer initialValue={content} />
      </S.IntroTextBox>
      <S.IntroBtnBox>
        <Btn icon="update" color="gray" onClick={postUpdateHandler}>
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
