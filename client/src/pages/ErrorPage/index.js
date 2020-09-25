import React from "react";
import { DefaultDiv } from "../../components";
import { StyledSubTitle } from "../../organisms/SubTitle/style";

function ErrorPage({ message }) {
  return (
    <DefaultDiv>
      <StyledSubTitle>{message}</StyledSubTitle>
    </DefaultDiv>
  );
}

ErrorPage.defaultProps = {
  message: "페이지를 찾을 수 없습니다.",
};

export default ErrorPage;
