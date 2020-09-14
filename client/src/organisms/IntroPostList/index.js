import React from "react";
import * as S from "./style";
import IntroPost from "../../components/IntroPost";

function IntroPostLIst({ posts }) {
  return (
    <S.IntroPostBox>
      {posts.map((post) => (
        <IntroPost key={post._id} post={post}></IntroPost>
      ))}
    </S.IntroPostBox>
  );
}

export default IntroPostLIst;
