import React from "react";
import * as S from "./style";
import profile from "../../images/profile.png";
import javascript from "../../images/skills/javascript.svg";
import { SubTitle } from "../../organisms";
import { Btn, DefaultDiv } from "../../components";

function About() {
  return (
    <S.aboutBox>
      <SubTitle titleName={About} />
      <S.subTitle2>profiles</S.subTitle2>
      <DefaultDiv>
        <S.profileImg src={profile} alt="profile" />
        김광림
        <br />
        <Btn
          icon="github"
          color="gray"
          onClick={() => window.open("https://github.com/kwong1110")}
        />
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
    </S.aboutBox>
  );
}

export default About;
