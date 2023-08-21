import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Editor from "./components/editor/Editor";
import Previewer from "./components/previewer/Previewer";
import { Context } from "./context";

const initialMarkdown = `
# Heading 1

## Subheading 1

This is a [link](https://www.example.com) to an example website.

Here is some \`inline code\`.

\`\`\`
// This is a code block
function greeting(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

![Example Image](https://upload.wikimedia.org/wikipedia/commons/6/67/Hoffl%C3%B6th%28T%C3%B6Vo-Cl%C3%B6rath%29-2%28400x400%29.jpg)

**This text is bolded.**
`;

function App() {
  const [text, setText] = useState(initialMarkdown);
  const [showEditor, setShowEditor] = useState(1);
  const [showPreviewer, setShowPreviewer] = useState(1);

  function onTextChange(text) {
    setText(text);
  }

  function onButtonClick(source, action) {
    if (action === "minimize") {
      setShowEditor(1);
      setShowPreviewer(1);
    } else if (source == "Editor") {
      setShowPreviewer(0);
    } else {
      setShowEditor(0);
    }
  }
  return (
    <div className="App">
      <Context.Provider value={onButtonClick}>
        {showEditor ? (
          <Editor
            text={text}
            onTextChange={onTextChange}
            isUnique={!showPreviewer}
          />
        ) : (
          ""
        )}
        {showPreviewer ? <Previewer text={text} isUnique={!showEditor} /> : ""}
      </Context.Provider>
    </div>
  );
}

export default App;
