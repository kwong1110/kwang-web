import React from "react";
import * as S from "./style";
import { SubTitle } from "../../organisms";
import { Btn, DefaultDiv } from "../../components";

import ReactTooltip from "react-tooltip";

import profile from "../../images/profile.png";
import * as Image from "../../images/skills/";

function About({ main }) {
  const keywards = [
    {
      title: "소통",
      content:
        "효율적인 시너지 효과를 내기 위해 지식을 공유하고,\n의견을 소통하는 개발을 좋아합니다.",
    },
    {
      title: "적극적",
      content:
        "새로운 기술을 적극적으로 수용합니다.\n다양한 목적에 맞는 기술을 적용하는 것을 좋아합니다.",
    },
    {
      title: "긍정적",
      content:
        "어떤 문제에 있어서 긍적적으로 다가갑니다.\n정확히 알고, 발전 할 수 있다 생각하여\n'Notion'을 통해 직면했던 문제들을 정리하여 관리합니다. ",
    },
  ];

  const skills = [
    "html",
    "css3",
    "javascript",
    "react",
    "redux",
    "nodejs",
    "mongodb",
    "jquery",
    "java",
    "spring",
    "oracle",
  ];
  return (
    <>
      <S.AboutBox>
        <SubTitle titleName={About} />
        <S.SubTitle2>profiles</S.SubTitle2>
        <DefaultDiv>
          <S.ProfileBox>
            <S.ProfileImg src={profile} alt="profile" />
            <DefaultDiv>
              <S.SubTitle2>김광림</S.SubTitle2>
              <Btn
                icon="github"
                color="gray"
                onClick={() => window.open("https://github.com/kwong1110")}
              >
                GitHub으로 이동
              </Btn>
            </DefaultDiv>
          </S.ProfileBox>
          <S.ProfileBox>
            {keywards.map((keyward, index) => (
              <S.KeywardBox key={index}>
                <S.Keyward>{keyward.title}</S.Keyward>
                <S.KeywardContant>{keyward.content}</S.KeywardContant>
              </S.KeywardBox>
            ))}
          </S.ProfileBox>
        </DefaultDiv>
        <S.SubTitle2>Skills</S.SubTitle2>
        <DefaultDiv>
          <S.SkillBox>
            {skills.map((skill, index) => (
              <S.SkillImg src={Image[skill]} key={index} />
            ))}
          </S.SkillBox>
        </DefaultDiv>
      </S.AboutBox>
      {!main && <ReactTooltip />}
    </>
  );
}

export default About;
