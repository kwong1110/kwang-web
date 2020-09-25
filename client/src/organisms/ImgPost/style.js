import styled from "styled-components";
import { IntroBox } from "../IntroPost/style";

export const ImgPostImg = styled.img`
  width: auto;
  height: 15rem;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const ImgPostTitle = styled.h5`
  margin: 1rem;
  text-align: center;
  cursor: pointer;
`;

export const ImgPostBox = styled(IntroBox)`
  display: flex;
  flex-direction: column;
`;
