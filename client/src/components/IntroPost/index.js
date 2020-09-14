import React from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";

function IntroPost({ post }) {
  const { title, content } = post;

  return (
    <S.IntroBox>
      <S.IntroImg src={logo} />
      <S.IntroText>
        <S.IntroTitle>{title}</S.IntroTitle>
        {content}
      </S.IntroText>
    </S.IntroBox>
  );
}

export default IntroPost;
