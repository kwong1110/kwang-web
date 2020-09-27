import styled from "styled-components";
import theme from "../../commons/Themes";

export const aboutBox = styled.div`
  ${theme.interval.pageBottom};
`;

export const profileImg = styled.img`
  width: auto;
`;

export const skillImg = styled.img`
  width: auto;
  height: 5rem;
  & + & {
    margin-left: 1rem;
  }
`;

export const subTitle2 = styled.h4`
  margin: 1rem;
  color: ${theme.palette.decoGray[2]};
  text-align: center;
`;

export const keywardBox = styled.div`
  width: 22rem;
  height: auto;
  ${theme.interval.atom};
`;

export const keyward = styled.div`
  display: inline;
  position: relative;
  left: 55px;
  padding: 0.7rem;
  border-radius: 10px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: gray;
  text-align: center;
  /* 스크롤 시 메뉴바 뒤에 오기 위함. */
  z-index: -1;
`;

export const keywardContant = styled.div`
  position: relative;
  top: -10px;
  left: 0px;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  border: 2px solid rgba(170, 170, 170, 0.8);
  border-radius: 10px;
  z-index: -2;
`;
