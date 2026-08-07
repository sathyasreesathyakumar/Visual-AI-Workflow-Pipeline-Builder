import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const DatabaseNode = ({ id }) => {
  const [table, setTable] = useState("users");

  return (
    <BaseNode
      id={id}
      title="Database"
      color="#14B8A6"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "records" }]}
    >
      <label>
        Table:
        <input
            className="nodrag"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};