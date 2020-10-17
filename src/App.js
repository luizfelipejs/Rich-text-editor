import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'
import './app.css'

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  ) 

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)
    }

    return 'not-handled'
  }

  const setStyleLine = (type) => {
    const newState = RichUtils.toggleInlineStyle(editorState, type)

    setEditorState(newState)
  }

  const toggleTypeBlock = (headerType) => {
    const newState = RichUtils.toggleBlockType(editorState, headerType)

    setEditorState(newState)
  }

  return (
    <div className="App">
      <div className="options">
        <button onClick={() => setStyleLine('BOLD')}>Bold</button>
        <button onClick={() => setStyleLine('ITALIC')}>Italic</button>
        <button onClick={() => setStyleLine('CODE')}>Code</button>
        <button onClick={() => setStyleLine('UNDERLINE')}>Underline</button>
        <button onClick={() => toggleTypeBlock('header-one')}>H1</button>
        <button onClick={() => toggleTypeBlock('header-two')}>H2</button>
        <button onClick={() => toggleTypeBlock('header-three')}>H3</button>
        <button onClick={() => toggleTypeBlock('header-four')}>H4</button>
        <button onClick={() => toggleTypeBlock('header-five')}>H5</button>
        <button onClick={() => toggleTypeBlock('header-six')}>H6</button>
        <button onClick={() => toggleTypeBlock('blockquote')}>Blockquote</button>
        <button onClick={() => toggleTypeBlock('unordered-list-item')}>UL</button>
        <button onClick={() => toggleTypeBlock('ordered-list-item')}>OL</button>
      </div>
      <Editor 
        editorState={editorState} 
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
}

export default App;
