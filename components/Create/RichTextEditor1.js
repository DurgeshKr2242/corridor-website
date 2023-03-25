import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { useGlobalAuthContext } from "/context/AuthContext";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const RichTextEditor1 = () => {
  const { editorState1, setEditorState1 } = useGlobalAuthContext();
  useEffect(() => {
    setEditorState1(EditorState.createEmpty());
    console.log(editorState1);
  }, []);

  const onEditorStateChange = (editorState1) => {
    setEditorState1(editorState1);
  };

  editorState1 !== null &&
    console.log(draftToHtml(convertToRaw(editorState1?.getCurrentContent())));

  const toolbar = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "fontFamily",
      "list",
      "textAlign",
      "colorPicker",
      "link",
      "embedded",
      "emoji",
      "image",
    ],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
    blockType: {
      options: ["Normal", "H1", "H2", "H3"],
    },
    fontSize: {
      options: [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40],
    },
  };

  return (
    <div>
      <Editor
        editorState={editorState1}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName "
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        // toolbar={toolbar}
      />
    </div>
  );
};

export default RichTextEditor1;
