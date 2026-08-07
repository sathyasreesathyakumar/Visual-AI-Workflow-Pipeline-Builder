import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const FileSaverNode = ({ id }) => {
  const [fileName, setFileName] = useState("output.txt");

  return (
    <BaseNode
      id={id}
      title="File Saver"
      color="#64748B"
      inputs={[{ id: "input" }]}
    >
      <label>
        File:
        <input
        className="nodrag"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};