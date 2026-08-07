import { useState, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );
  const variableMatches =
  currText.match(/{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g) || [];
  const updateNodeInternals = useUpdateNodeInternals();

const variables = [
  ...new Set(
    variableMatches.map((match) =>
      match.replace(/{{|}}/g, "").trim()
    )
  ),
];
useEffect(() => {
  updateNodeInternals(id);
}, [variables, id, updateNodeInternals]);

  return (
    <BaseNode
  id={id}
  title="Text"
  color="#8B5CF6"
  style={{
    width: 280,
    minHeight: Math.max(
    120,
    currText.split("\n").length * 2 + 10
),
  }}
  inputs={variables.map((variable) => ({
    id: variable,
  }))}
  outputs={[
    { id: "output" }
  ]}
>
      <label>
        Text:
      <textarea
      className="nodrag"
      placeholder="Enter text. Use {{variable}} for dynamic inputs."
  value={currText}
  onChange={(e) => setCurrText(e.target.value)}
  rows={Math.max(3, currText.split("\n").length)}
  style={{
    width: "100%",
    resize: "none",
  }}
/>
      </label>
    </BaseNode>
  );
};