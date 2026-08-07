import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const WebSearchNode = ({ id }) => {
  const [query, setQuery] = useState("");

  return (
    <BaseNode
      id={id}
      title="Web Search"
       color="#06B6D4"
      inputs={[{ id: "trigger" }]}
      outputs={[{ id: "results" }]}
    >
      <label>
        Query:
        <input
        className="nodrag"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </label>
    </BaseNode>
  );
};