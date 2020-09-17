import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { Btn } from "..";
import ShadowDiv from "../ShadowDiv";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function IntroPost({ post }) {
  const { title, content } = post;

  return (
    <ShadowDiv>
      <S.IntroImg src={logo} />
      <S.IntroTextBox>
        <S.IntroTitle>{title}</S.IntroTitle>
        <Viewer data={content} />
        {content}
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
