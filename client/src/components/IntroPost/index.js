import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";

function IntroPost() {
  return (
    <S.IntroBox>
      <S.IntroImg src={logo} />
      <S.IntroText>
        <S.IntroTitle>제목입니다.</S.IntroTitle>
        내용내용
      </S.IntroText>
    </S.IntroBox>
  );
}

export default IntroPost;
