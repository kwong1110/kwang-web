import React from "react";
import * as S from "./style";
import { DefaultDiv } from "../../components";
import { SubTitle } from "../../organisms";

import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

function Contact({ main }) {
  const copyHandler = () => {
    alert("복사 되었습니다!");
  };

  return (
    <>
      <S.ContactBox>
        <SubTitle titleName={"Contact"} />
        <DefaultDiv>
          <CopyToClipboard text={"kwong8535@naver.com"}>
            <S.ContactIconBtn
              icon="mail"
              color="secondary"
              onClick={copyHandler}
            >
              메일 복사
            </S.ContactIconBtn>
          </CopyToClipboard>
        </DefaultDiv>
        <h4>kwong8535@naver.com</h4>
      </S.ContactBox>
      {!main && <ReactTooltip />}
    </>
  );
}

export default Contact;
