import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPosts } from "../../modules/actions/post";
import { Btn, DefaultDiv } from "../../components";
import { SubTitle, ImgPostList } from "../../organisms";
import NotData from "../NotData";

function MyNote() {
  const dispatch = useDispatch();
  const history = useHistory();

  const createPostHandler = () => {
    history.push("mynote/form");
  };

  const { data, userData } = useSelector(
    (state) => ({
      data: state.post.mynote.data,
      userData: state.user.userData,
    }),
    shallowEqual
  );

  useEffect(() => {
    const param = {
      page: 1,
      postType: "mynote",
    };

    dispatch(getPosts(param));
  }, [dispatch]);

  if (!data) return null;

  return (
    <>
      <SubTitle titleName={MyNote} />
      {userData && userData.isAuth && (
        <DefaultDiv>
          <Btn icon="plus" tooltip onClick={createPostHandler}>
            노트 추가
          </Btn>
        </DefaultDiv>
      )}
      {data.length === 0 && <NotData />}
      <ImgPostList posts={data} />
    </>
  );
}

export default MyNote;
