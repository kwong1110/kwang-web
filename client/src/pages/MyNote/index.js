import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

  const { data } = useSelector((state) => state.post.mynote);

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
      <DefaultDiv>
        <Btn icon="plus" onClick={createPostHandler}>
          노트 추가
        </Btn>
      </DefaultDiv>
      {data.length === 0 && <NotData />}
      <ImgPostList posts={data} />
    </>
  );
}

export default MyNote;
