import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SubTitle, IntroPostLIst } from "../../organisms";
import { getPosts } from "../../modules/actions/post";

function Project() {
  const postData = useSelector((state) => state.post.postData);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = {
      page: 1,
      postType: "PROJECT",
    };

    dispatch(getPosts(body)).then((response) => {
      if (response.payload.success) {
        console.log(response.payload.maxPage);
      } else {
        alert(response.payload.message);
      }
    });
  }, [dispatch, postData]);

  if (!postData) return null;
  return (
    <>
      <SubTitle titleName={Project} />
      <IntroPostLIst />
    </>
  );
}

export default Project;
