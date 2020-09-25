import styled from "styled-components";
import theme from "../../commons/Themes";
import { StyledShadowDiv } from "../../components/ShadowDiv";

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
  height: 15rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const IntroTitle = styled.h4`
  margin: 1rem;
  text-align: center;
  cursor: pointer;
`;

export const IntroBox = styled(StyledShadowDiv)`
  transition: all 300ms ease-in-out;
  :hover {
    box-shadow: inset 0 0 0.4em 0 rgba(170, 170, 170, 0.3),
      0 5px 13px rgba(0, 0, 0, 0.3);
    transform: scale(1.02, 1.02);
    transition: transform box-shadow 300ms ease-in-out;
  }
`;
