import React from "react";
import { SubTitle } from "../../organisms";
import DefaultDiv from "../../components/DefaultDiv";
import * as S from "./style";
import javascript from "../../images/skills/javascript.svg";

function About() {
  return (
    <>
      <SubTitle titleName={About} />
      <S.subTitle2>profiles</S.subTitle2>
      <DefaultDiv>
        <div>
          <S.skillImg src={javascript} />
          김광림
          <br />
          아이콘(github)
        </div>
        <div>
          CAFE24 플랫폼을 통해 홈페이지를 운영하다 개발에 빠지게되었습니다.
          <br />
          현재는 지금 보시는 사이트를 REACT로 구현중에 있습니다.
        </div>
      </DefaultDiv>
      <DefaultDiv>
        <S.keywardBox>
          <S.keyward>적극적</S.keyward>
          <S.keywardContant>항상 적극적입니다.</S.keywardContant>
        </S.keywardBox>
        <S.keywardBox>
          <S.keyward>끈기</S.keyward>
          <S.keywardContant>항상 적극적입니다.</S.keywardContant>
        </S.keywardBox>
        <S.keywardBox>
          <S.keyward>소통</S.keyward>
          <S.keywardContant>항상 적극적입니다.</S.keywardContant>
        </S.keywardBox>
      </DefaultDiv>
      <S.subTitle2>Skills</S.subTitle2>
      <DefaultDiv>
        <S.skillImg src={javascript} />
      </DefaultDiv>
    </>
  );
}

export default About;
