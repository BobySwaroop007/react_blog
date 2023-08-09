import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const Note = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div>
      <h1>Rich Text Editor Example</h1>
      <Editor editorState={editorState} onChange={onChange} />
    </div>
  );
};

export default Note;
