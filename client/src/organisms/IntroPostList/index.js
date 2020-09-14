import React from "react";
import * as S from "./style";
import IntroPost from "../../components/IntroPost";
import { Btn, DefaultDiv } from "../../components";

function IntroPostLIst({ posts }) {
  const createPostHandler = () => {};

  return (
    <S.IntroPostBox>
      <DefaultDiv>
        <Btn icon="plus" onclick={createPostHandler}>
          프로젝트 추가
        </Btn>
      </DefaultDiv>
      {posts.map((post) => (
        <IntroPost key={post._id} post={post}></IntroPost>
      ))}
    </S.IntroPostBox>
  );
}

export default IntroPostLIst;
