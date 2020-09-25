import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import * as S from "./style";
import logo from "../../images/logo.svg";

function ImgPost({ post, postId }) {
  const history = useHistory();

  const currentPath = useRouteMatch().path;

  const { title, imgPath } = post;

  const postViewHandler = () => {
    history.push(`${currentPath}/${postId}`);
  };

  return (
    <S.ImgPostBox>
      <S.ImgPostImg src={imgPath || logo} onClick={postViewHandler} />
      <S.ImgPostTitle onClick={postViewHandler}>{title}</S.ImgPostTitle>
    </S.ImgPostBox>
  );
}

export default ImgPost;
