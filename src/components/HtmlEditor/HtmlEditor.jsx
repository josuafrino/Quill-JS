import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function HtmlEditor() {
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ direction: "rtl" }],
      [{ align: [] }],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
  };

  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quill) {
      quill.enable(true); // Set the editor to read-only mode
      quill.on("text-change", () => {
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);
  console.log(value, "this is quill editor");

  return (
    <div>
      <div style={{ width: 750, height: 500 }}>
        <div ref={quillRef} />
      </div>
    </div>
  );
}

export default HtmlEditor;
