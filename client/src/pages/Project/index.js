import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SubTitle, IntroPostLIst } from "../../organisms";
import { getPosts } from "../../modules/actions/post";

function Project() {
  const { posts } = useSelector((state) => state.post.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts) return;

    const param = {
      page: 1,
      postType: "project",
    };

    dispatch(getPosts(param));
  }, [dispatch, posts]);

  console.log(posts);

  if (!posts) return <div>로딩중</div>;

  return (
    <>
      <SubTitle titleName={Project} />
      <IntroPostLIst posts={posts} />
    </>
  );
}

export default Project;
