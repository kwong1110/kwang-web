import React from "react";
import * as S from "./style";
import ImgPost from "../ImgPost";

function ImgPostList({ posts }) {
  return (
    <S.GridContainer>
      {posts.map((post) => (
        <ImgPost key={post._id} post={post} postId={post._id}></ImgPost>
      ))}
    </S.GridContainer>
  );
}

export default ImgPostList;
