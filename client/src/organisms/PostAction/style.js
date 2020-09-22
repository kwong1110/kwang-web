import styled from "styled-components";
import { Btn } from "../../components";

export const PreviewBox = styled.div`
  display: flex;
  margin-right: 1rem;
  & + & {
    margin-top: 1rem;
  }
`;

export const PreviewImg = styled.img`
  width: 40%;
  height: 12rem;
  margin-bottom: 1rem;
`;

export const PreviewBtn = styled(Btn)`
  margin-right: 1rem;
`;
