import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { useGlobalAuthContext } from "/context/AuthContext";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const RichTextEditor3 = () => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { editorState3, setEditorState3 } = useGlobalAuthContext();
  useEffect(() => {
    setEditorState3(EditorState.createEmpty());
    console.log(editorState3);
  }, []);

  const onEditorStateChange = (editorState3) => {
    // setEditorState(editorState);
    setEditorState3(editorState3);
  };

  editorState3 !== null &&
    console.log(draftToHtml(convertToRaw(editorState3?.getCurrentContent())));

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
        editorState={editorState3}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName "
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbar}
      />
    </div>
  );
};

export default RichTextEditor3;
