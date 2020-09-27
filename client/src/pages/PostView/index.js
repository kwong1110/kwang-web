import React, { useEffect, useState, useCallback } from "react";
import * as S from "./style";
import logo from "../../images/logo.svg";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  editPost,
  getPost,
  clearPost,
  deletePost,
} from "../../modules/actions/post";
import { PostAction } from "../../organisms";
import { ShadowDiv, DefaultForm, Btn, DefaultDiv } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import ReactTooltip from "react-tooltip";

function PostView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { type, postId } = useParams();

  const { data, userData } = useSelector(
    (state) => ({
      data: state.post.post.data,
      userData: state.user.userData,
    }),
    shallowEqual
  );

  const fetchPost = useCallback(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    fetchPost();
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, fetchPost]);

  const [onEdit, setOnEdit] = useState(false);

  const editHandler = (body) => {
    dispatch(editPost(body, postId)).then((response) => {
      if (response.payload.success) {
        alert("수정 성공");
        setOnEdit(false);
        fetchPost();
      } else {
        alert(response.payload.message);
      }
    });
  };

  const deleteHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까? \n삭제 후 복구가 불가능합니다."))
      dispatch(deletePost(postId)).then((response) => {
        if (response.payload.success) {
          alert("삭제 성공");
          history.push(`/posts/${type}`);
        } else {
          alert(response.payload.message);
        }
      });
  };

  // post 최신화를 위해 따로 작성(리렌더링)
  const PostViewer = () => <Viewer initialValue={content} />;

  if (!data) return null;
  const { title, content, imgPath } = data;

  return (
    <>
      {!onEdit && (
        <ShadowDiv>
          <DefaultForm>
            <S.PostTitleBox>
              <S.PostTitle>{title}</S.PostTitle>
              {userData && userData.isAuth && (
                <div>
                  <Btn
                    type="button"
                    icon="update"
                    color="gray"
                    onClick={() => setOnEdit(!onEdit)}
                  >
                    수정
                  </Btn>
                  <Btn
                    type="button"
                    icon="delete"
                    color="reject"
                    onClick={deleteHandler}
                  >
                    삭제
                  </Btn>
                </div>
              )}
            </S.PostTitleBox>
            <S.PostContentBox>
              <S.PostMainImg src={imgPath || logo} alt="postMainImage" />
              <PostViewer content={content} />
              <DefaultDiv>
                {"githubURL" in data && (
                  <Btn
                    icon="github"
                    color="gray"
                    onClick={() => window.open(data.githubURL)}
                  >
                    GitHub으로 이동
                  </Btn>
                )}
                {"siteURL" in data && (
                  <Btn
                    icon="link"
                    color="gray"
                    onClick={() => window.open(data.siteURL)}
                  >
                    사이트로 이동
                  </Btn>
                )}
              </DefaultDiv>
            </S.PostContentBox>
          </DefaultForm>
        </ShadowDiv>
      )}
      {onEdit && (
        <PostAction
          submitAction={editHandler}
          actionName="수정"
          originData={data}
        />
      )}
      <ReactTooltip />
    </>
  );
}

export default PostView;
