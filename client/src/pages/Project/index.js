import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SubTitle, IntroPostLIst } from "../../organisms";
import { getPosts } from "../../modules/actions/post";

function Project() {
  const posts = useSelector((state) => state.post.data);
  // const { posts } = useSelector((state) => ({ posts: state.post.data.posts }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts) return;

    const body = {
      page: 1,
      postType: "project",
    };

    dispatch(getPosts(body));
  }, [dispatch, posts]);

  console.log(posts);

  return (
    <>
      <SubTitle titleName={Project} />
      <IntroPostLIst />
    </>
  );
}

export default Project;
