import React, { createRef } from "react";
import * as S from "./style";
import { useHistory, useParams } from "react-router-dom";
import { NotFound } from "../../pages";
import useInputs from "../../hooks/useInputs";
import { SubTitle } from "../../organisms";
import { Input, Btn, ShadowDiv } from "../../components";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function PostAction({ postHandler }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const editorRef = createRef();

  const { _id } = useSelector((state) => state.user.userData);

  const initialState = {
    title: "",
  };

  const [form, onChange, reset] = useInputs(initialState);
  const { title } = form;

  const postHandler = (event) => {
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

  const { type } = useParams();

  // params를 이용해 type과 action을 지정한 페이지가 아니면 접근을 못하게함.
  if (type !== "project" && type !== "mynote") return <NotFound />;

  const titleName = type === "project" ? "프로젝트" : "노트";

  return (
    <div>
      <SubTitle titleName={`${titleName} 작성`} action />
      <ShadowDiv>
        <S.PostCreateForm onSubmit={postHandler}>
          <Input
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 입력해주세요."
          />
          <Editor
            name="content"
            previewStyle="vertical"
            height="530px"
            initialEditType="wysiwyg"
            initialValue="##### 기간 : 2020.09.00 ~ 2020.00.00"
            ref={editorRef}
          />
          <Btn type="submit" style={{ marginTop: "1.5rem" }}>
            작성완료
          </Btn>
        </S.PostCreateForm>
      </ShadowDiv>
    </div>
  );
}

export default PostAction;
