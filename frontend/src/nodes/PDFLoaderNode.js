import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const PDFLoaderNode = ({ id }) => {
  const [fileName, setFileName] = useState("");

  return (
    <BaseNode
      id={id}
      title="PDF Loader"
      color="#EF4444"
      inputs={[{ id: "text" }]}
      outputs={[{ id: "document",
        style: {
            top: "50%"
        }
       }]}
    >
      <label>
        File:
        <input
  type="file"
  accept=".pdf"
  onChange={(e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  }}
/>
{fileName && (
  <p style={{ fontSize: "12px" }}>
     {fileName}
  </p>
)}
      </label>
    </BaseNode>
  );
};