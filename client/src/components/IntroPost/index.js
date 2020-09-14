import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { Btn } from "..";

function IntroPost({ post }) {
  const { title, content } = post;

  return (
    <S.IntroBox>
      <S.IntroImg src={logo} />
      <S.IntroTextBox>
        <S.IntroTitle>{title}</S.IntroTitle>
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
    </S.IntroBox>
  );
}

export default IntroPost;
