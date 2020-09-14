import styled from "styled-components";
import theme from "../../commons/Themes";

export const IntroBox = styled.div`
  ${theme.interval.box};
  display: flex;
  border-radius: 10px;
  ${theme.boxShadow};
`;

export const IntroTextBox = styled.div`
  ${theme.interval.atom};
  width: 55%;
`;

export const IntroBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IntroImg = styled.img`
  width: 40%;
  height: 12rem;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
`;

export const IntroTitle = styled.h4`
  margin: 1rem;
  text-align: center;
`;
