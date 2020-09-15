import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import IntroPost from "../../components/IntroPost";
import { Btn, DefaultDiv } from "../../components";

function IntroPostLIst({ posts }) {
  const history = useHistory();

  const createPostHandler = () => {
    history.push("/posts/project/create");
  };

  return (
    <S.IntroPostBox>
      <DefaultDiv>
        <Btn icon="plus" onClick={createPostHandler}>
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
