import React from "react";
import * as S from "./style";
import IntroPost from "../../components/IntroPost";

function IntroPostLIst({ posts }) {
  return (
    // post를 수정 할 때 정보전달을 위해 pNo를 사용.
    // _id를 사용하게 되면 보안, 개인정보등의 이유가 있을 수 있으므로
    <S.IntroPostBox>
      {posts.map((post, n) => (
        <IntroPost key={post._id} post={post} pNo={n}></IntroPost>
      ))}
    </S.IntroPostBox>
  );
}

export default IntroPostLIst;
