import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { Btn, ShadowDiv } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function IntroPost({ post, postId }) {
  const history = useHistory();

  const { title, content, imgPath } = post;

  const postViewHandler = () => {
    history.push(`/posts/project/${postId}`);
  };

  // post 최신화를 위해 따로 작성(리렌더링)
  const PostViewer = () => <Viewer initialValue={content} />;

  return (
    <ShadowDiv>
      <S.IntroImgBox>
        <S.IntroImg src={imgPath || logo} onClick={postViewHandler} />
        <div>
          <Btn
            icon="github"
            color="gray"
            onClick={() => window.open("http://naver.com")}
          >
            GitHub으로 이동
          </Btn>
          <Btn icon="link" color="gray">
            사이트로 이동
          </Btn>
        </div>
      </S.IntroImgBox>
      <S.IntroTextBox>
        <S.IntroTitle onClick={postViewHandler}>{title}</S.IntroTitle>
        <PostViewer content={content} />
      </S.IntroTextBox>
    </ShadowDiv>
  );
}

export default IntroPost;
