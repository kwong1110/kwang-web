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
      <S.StyledSubTitle>{titleName.name}</S.StyledSubTitle>
    </DefaultDiv>
  );
}

SubTitle.defaultProps = {
  titleName: SubTitle,
  action: false,
};

export default SubTitle;
