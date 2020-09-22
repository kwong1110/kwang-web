import styled from "styled-components";
import theme from "../../commons/Themes";

export const IntroTextBox = styled.div`
  ${theme.interval.atom};
  padding-left: 2rem;
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  width: 55%;
`;

export const IntroImgBox = styled.div`
  width: 40%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const IntroImg = styled.img`
  width: auto;
  height: 240px;
  padding: 1rem;
  cursor: pointer;
`;

export const IntroTitle = styled.h4`
  margin: 1rem;
  text-align: center;
  cursor: pointer;
`;
