import React, { createRef, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ErrorPage } from "../../pages";
import useInputs from "../../hooks/useInputs";
import { SubTitle } from "../../organisms";
import { Input, Btn, ShadowDiv, DefaultForm } from "../../components";
import { PostEditor } from "../../lib/toast-ui-editor";

function PostAction({ submitAction, actionName, originData = null }) {
  // 이미지 업로드
  const [image, setImage] = useState({
    file: null,
    imgPath: originData ? originData.imgPath : null,
  });

  const imageHandler = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImage({
        file: file,
        imgPath: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  // url업로드
  const [urlForm, setURLForm] = useState(false);
  const urlFormHandler = () => {
    setURLForm(!urlForm);
  };

  //
  const { _id } = useSelector((state) => state.user.userData);

  const editorRef = createRef();

  let initialState = {
    title: "",
    githubURL: "",
    siteURL: "",
  };

  let content = "";
  if (originData) {
    initialState.title = originData.title;
    initialState.githubURL = originData.githubURL;
    initialState.siteURL = originData.siteURL;
    content = originData.content;
  }

  const [form, onChange, reset] = useInputs(initialState);
  const { title, githubURL, siteURL } = form;

  const postHandler = (event) => {
    event.preventDefault();

    const body = {
      writer: _id,
      title: title,
      imgPath: image.imgPath,
      content: editorRef.current.getInstance().getHtml(),
    };

    if (urlForm) {
      body.githubURL = githubURL;
      body.siteURL = siteURL;
    }

    submitAction(body);
    reset();
  };

  // params를 이용해 type과 action을 지정한 페이지가 아니면 접근을 못하게함.
  const { type } = useParams();
  const titleName = type === "project" ? "프로젝트" : "노트";

  if (type !== "project" && type !== "mynote")
    return <ErrorPage msg="게시글 종류를 확인해주세요." />;

  return (
    <>
      <SubTitle titleName={`${titleName} ${actionName}`} action />
      <ShadowDiv>
        <DefaultForm onSubmit={postHandler}>
          <Input
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 입력해주세요."
          />
          <S.PreviewBox>
            <S.PreviewBtn type="button" onClick={urlFormHandler}>
              참고 사이트 / GitHub 주소 등록
            </S.PreviewBtn>
            {urlForm && (
              <div>
                <Input
                  name="githubURL"
                  value={githubURL}
                  onChange={onChange}
                  placeholder="gitHub 주소를 입력해주세요."
                />
                <Input
                  name="siteURL"
                  value={siteURL}
                  onChange={onChange}
                  placeholder="사이트 주소를 입력해주세요."
                />
              </div>
            )}
          </S.PreviewBox>
          <S.PreviewBox>
            <S.PreviewBtn type="button" style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="imgUpload">대표 이미지 등록</label>
            </S.PreviewBtn>
            {image.imgPath && (
              <S.PreviewImg src={image.imgPath} alt="postMainImage" />
            )}
            <Input
              id="imgUpload"
              type="file"
              accept="image/*"
              name="imgPath"
              onChange={imageHandler}
            />
          </S.PreviewBox>
          <PostEditor content={content} editorRef={editorRef} />
          <Btn type="submit" style={{ marginTop: "1.5rem" }}>
            작성완료
          </Btn>
        </DefaultForm>
      </ShadowDiv>
    </>
  );
}

export default PostAction;
