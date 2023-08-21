import React, { useState } from "react";
import Header from "../header/Header";
import "./Editor.css";
function Editor({ text, onTextChange, isUnique }) {
  const heightClass = isUnique ? "min-height" : "";
  console.log(heightClass);
  return (
    <div className="editor">
      <Header name="Editor" />
      <textarea
        id="editor"
        value={text}
        className={heightClass}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}

export default Editor;
