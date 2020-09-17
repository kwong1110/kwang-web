import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import useInputs from "../../hooks/useInputs";
import { createPost } from "../../modules/actions/post";
import { SubTitle } from "../../organisms";
import { Input, Btn, ShadowDiv, DefaultDiv } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function PostCreate() {
  const editorRef = React.createRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const { _id } = useSelector((state) => state.user.userData);

  const initialState = {
    title: "",
  };

  const [form, onChange, reset] = useInputs(initialState);
  const { title } = form;

  const postCreateHandler = (event) => {
    event.preventDefault();

    const body = {
      writer: _id,
      title: title,
      content: editorRef.current.getInstance().getHtml(),
    };

    dispatch(createPost(body, "project")).then((response) => {
      if (response.payload.success) {
        reset();
        history.push("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  return (
    <>
      <SubTitle titleName="글 작성" action />
      <DefaultDiv>
        <ShadowDiv>
          <S.PostCreateForm onSubmit={postCreateHandler}>
            <Input
              name="title"
              value={title}
              onChange={onChange}
              placeholder="제목을 입력해주세요."
            />
            <Editor
              name="content"
              initialValue="<h5>기간 : 2020.09.00 ~ 2020.00.00</h5>"
              previewStyle="vertical"
              height="450px"
              initialEditType="wysiwyg"
              useCommandShortcut={true}
              ref={editorRef}
            />
            <Btn type="submit" style={{ marginTop: "1.5rem" }}>
              작성완료
            </Btn>
          </S.PostCreateForm>
        </ShadowDiv>
      </DefaultDiv>
    </>
  );
}

export default PostCreate;
