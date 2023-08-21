import React from "react";
import Header from "../header/Header";
import "./Previewer.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

function Previewer({ text, isUnique }) {
  const heightClass = isUnique ? "min-height" : "";

  return (
    <div className="previewer">
      <Header name="Previewer" />
      <div className="preview">
        <p id="preview" className={"content " + heightClass}>
          {/* Pass the 'breaks' prop to enable line breaks */}
          <ReactMarkdown
            children={text}
            remarkPlugins={[remarkGfm, remarkBreaks]}
          />
        </p>
      </div>
    </div>
  );
}

export default Previewer;
