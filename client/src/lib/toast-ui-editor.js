import React from "react";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer, Editor } from "@toast-ui/react-editor";

export const editorInitialValue = "##### 기간 : 2020.09.00 ~ 2020.00.00";

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
