import React from "react";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer, Editor } from "@toast-ui/react-editor";

export const editorInitialValue =
  "<strong>프로젝트 명 : </strong>\n" +
  "<strong>기간 : </strong> 2020.09.00 ~ 2020.00.00\n" +
  "<strong>개발 목표 : </strong>\n" +
  "<strong>개발 환경 : </strong>\n" +
  "<strong>구현 기능 : </strong>\n" +
  "<strong>역할 : </strong>\n" +
  "<strong></strong>";

export const PostViewer = ({ content }) => <Viewer initialValue={content} />;

export const PostEditor = ({ content, editorRef }) => (
  <Editor
    name="content"
    previewStyle="vertical"
    height="530px"
    initialEditType="markdown"
    initialValue={content || editorInitialValue}
    ref={editorRef}
  />
);
