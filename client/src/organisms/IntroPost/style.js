import styled from "styled-components";
import theme from "../../commons/Themes";

export const IntroTextBox = styled.div`
  ${theme.interval.atom};
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  width: 55%;
`;

export const IntroImg = styled.img`
  width: 40%;
  height: 12rem;
  cursor: pointer;
`;

export const IntroTitle = styled.h4`
  margin: 1rem;
  text-align: center;
  cursor: pointer;
`;
