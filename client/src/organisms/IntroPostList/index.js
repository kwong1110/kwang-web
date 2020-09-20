import React from "react";
import * as S from "./style";
import IntroPost from "../IntroPost";

function IntroPostLIst({ posts }) {
  return (
    <S.IntroPostBox>
      {posts.map((post) => (
        <IntroPost key={post._id} post={post} postId={post._id}></IntroPost>
      ))}
    </S.IntroPostBox>
  );
}

export default IntroPostLIst;
