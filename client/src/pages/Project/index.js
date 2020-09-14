import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SubTitle, IntroPostLIst } from "../../organisms";
import { getPosts } from "../../modules/actions/post";

function Project() {
  const { data } = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;

    const param = {
      page: 1,
      postType: "project",
    };

    dispatch(getPosts(param));
  }, [dispatch, data]);

  // console.log(posts);

  // 차 후 예정
  // if (loading && !data) return <div>로딩중...</div>;
  // if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <SubTitle titleName={Project} />
      <IntroPostLIst posts={data} />
    </>
  );
}

export default Project;
