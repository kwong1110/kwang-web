import styled from "styled-components";
import theme from "../../commons/Themes";

export const IntroBox = styled.div`
  ${theme.interval.box};
  display: flex;
  border-radius: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1), -7px 0 10px rgba(0, 0, 0, 0.1);
`;

export const IntroText = styled.div`
  ${theme.interval.atom};
`;

export const IntroImg = styled.img`
  width: auto;
  height: 10rem;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
`;

export const IntroTitle = styled.h4`
  margin: 1rem;
  text-align: center;
`;
