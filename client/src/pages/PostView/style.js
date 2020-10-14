import styled from "styled-components";
import theme from "../../commons/Themes";

export const PostTitle = styled.h3`
  padding-left: 2rem;
`;

export const PostMainImg = styled.img`
  width: auto;
`;

export const PostForm = styled.form`
  width: 100%;
  margin: 2rem;
`

export const PostContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${theme.interval.box};
  margin-top: 3rem;
`;

export const PostTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
`;
