// InputNode.jsx

import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      id={id}
      title="Input"
      color="#3B82F6"
       
      outputs={[
        { id: "value",
          style: {
            top: "50%"
        } }
      ]}
    >
      <div>
        <label>
          Name:
          <input
            className="nodrag"
            type="text"
            
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Type:
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};