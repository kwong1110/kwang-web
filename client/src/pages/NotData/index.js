import React from "react";
import styled from "styled-components";
import theme from "../../commons/Themes";

const NotDataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${theme.interval.box};
  color: ${theme.palette.decoGray[2]};
`;

const NotDataTitle = styled.h3`
  margin-bottom: 1rem;
`;

const NotDataContant = styled.h4``;

function NotData() {
  return (
    <NotDataDiv>
      <NotDataTitle>등록된 게시물이 없습니다!</NotDataTitle>
      <NotDataContant>+버튼을 눌러 게시물을 등록해주세요!!</NotDataContant>
    </NotDataDiv>
  );
}

export default NotData;
