import React from "react";
import * as S from "./style";
import DefaultDiv from "../../components/DefaultDiv";

function SubTitle({ titleName, action }) {
  if (action)
    return (
      <DefaultDiv>
        <S.StyledActionSubTitle>{titleName}</S.StyledActionSubTitle>
      </DefaultDiv>
    );

  return (
    <DefaultDiv>
      <S.StyledSubTitle>{titleName}</S.StyledSubTitle>
    </DefaultDiv>
  );
}

SubTitle.defaultProps = {
  action: false,
};

export default SubTitle;
