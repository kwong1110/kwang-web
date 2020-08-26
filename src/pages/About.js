import React from "react";
import SubTitle from "../organisms/SubTitle";
import DefaultDiv from "../components/DefaultDiv";

function About() {
  return (
    <>
      <SubTitle titleName={About} />
      <DefaultDiv>
        <p>
          <h4>안녕하세요</h4>
          CAFE24라는 플랫폼을 통해 홈페이지를 운영하다가 개발의 매력에
          빠지게되어 개발자로서 새로운 시작을 하려고합니다.
          <br />
        </p>
      </DefaultDiv>
    </>
  );
}

export default About;
