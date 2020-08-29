import styled from "styled-components";
import theme from "../../commons/Themes";

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

export const keyward = styled.h5`
  display: inline;
  position: relative;
  left: 50px;
  padding: 0.5rem;
  border-radius: 10px;
  background: ${theme.palette.decoGray[2]};
  color: white;
  font-weight: 700;
  text-align: center;
  z-index: -1; /* 스크롤 시 메뉴바 뒤에 오기 위함. */
  ${theme.boxShadow}
`;

export const keywardContant = styled.div`
  position: relative;
  top: -10px;
  left: 0px;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  border: 2px solid ${theme.palette.decoGray[1]};
  border-radius: 10px;
  z-index: -2;
  ${theme.boxShadow};
`;
