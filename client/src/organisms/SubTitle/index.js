import React from "react";
import * as S from "./style";
import DefaultDiv from "../../components/DefaultDiv";

function SubTitle({ titleName, action }) {
  if (action)
    return (
      <DefaultDiv>
        <S.ActionSubTitle>{titleName}</S.ActionSubTitle>
      </DefaultDiv>
    );

  return (
    <DefaultDiv>
      <S.SubTitle>{titleName.name}</S.SubTitle>
    </DefaultDiv>
  );
}

SubTitle.defaultProps = {
  titleName: SubTitle,
  action: false,
};

export default SubTitle;
