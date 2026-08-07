import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const TransformationNode = ({ id }) => {
  const [operation, setOperation] = useState("Uppercase");

  return (
    <BaseNode
      id={id}
      title="Transformation"
      color="#6366F1"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
    >
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option>Uppercase</option>
          <option>Lowercase</option>
          <option>Trim</option>
        </select>
      </label>
    </BaseNode>
  );
};