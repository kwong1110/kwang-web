import React from "react";
import { DefaultDiv } from "../../components";
import { SubTitle } from "../../organisms/SubTitle/style";

function ErrorPage({ message }) {
  return (
    <DefaultDiv>
      <SubTitle>{message}</SubTitle>
    </DefaultDiv>
  );
}

ErrorPage.defaultProps = {
  message: "페이지를 찾을 수 없습니다.",
};

export default ErrorPage;
