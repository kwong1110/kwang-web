import React, { createRef, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ErrorPage } from "../../pages";
import useInputs from "../../hooks/useInputs";
import { SubTitle } from "../../organisms";
import { Input, Btn, ShadowDiv, DefaultForm } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function PostAction({ submitAction, actionName, originData = null }) {
  const [image, setImage] = useState({ file: null, imgPath: null });

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
  //
  const { _id } = useSelector((state) => state.user.userData);

  const editorRef = createRef();
  let editorInitialValue = "##### 기간 : 2020.09.00 ~ 2020.00.00";

  let initialState = {
    title: "",
  };

  if (originData) {
    initialState.title = originData.title;
    editorInitialValue = originData.content;
  }

  const [form, onChange, reset] = useInputs(initialState);
  const { title } = form;

  const postHandler = (event) => {
    event.preventDefault();

    const body = {
      writer: _id,
      title: title,
      imgPath: image.imgPath,
      content: editorRef.current.getInstance().getHtml(),
    };

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
            {image.imgPath && (
              <S.PreviewImg src={image.imgPath} alt="postMainImage" />
            )}
            <Btn type="button" style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="imgUpload">대표 이미지 등록</label>
            </Btn>
          </S.PreviewBox>
          <Input
            id="imgUpload"
            type="file"
            accept="image/*"
            name="imgPath"
            onChange={imageHandler}
          />
          <Editor
            name="content"
            previewStyle="vertical"
            height="530px"
            initialEditType="wysiwyg"
            initialValue={editorInitialValue}
            ref={editorRef}
          />
          <Btn type="submit" style={{ marginTop: "1.5rem" }}>
            작성완료
          </Btn>
        </DefaultForm>
      </ShadowDiv>
    </>
  );
}

export default PostAction;
