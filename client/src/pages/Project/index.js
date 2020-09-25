import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../modules/actions/post";
import { Btn, DefaultDiv } from "../../components";
import { SubTitle, IntroPostLIst } from "../../organisms";
import NotData from "../NotData";

function Project() {
  const dispatch = useDispatch();
  const history = useHistory();

  const createPostHandler = () => {
    history.push("project/form");
  };

  const { data } = useSelector((state) => state.post.project);

  useEffect(() => {
    const param = {
      page: 1,
      postType: "project",
    };

    dispatch(getPosts(param));
  }, [dispatch]);

  // 차 후 예정
  // if (loading && !data) return <div>로딩중...</div>;
  // if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <SubTitle titleName={Project} />
      <DefaultDiv>
        <Btn icon="plus" onClick={createPostHandler}>
          프로젝트 추가
        </Btn>
      </DefaultDiv>
      {data.length === 0 && <NotData />}
      <IntroPostLIst posts={data} />
    </>
  );
}

export default Project;
