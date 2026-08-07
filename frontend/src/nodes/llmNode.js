import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      color="#10B981"

      title="LLM"
      inputs={[
        {
          id: "system",
          style: { top: "33%" },
        },
        {
          id: "prompt",
          style: { top: "66%" },
        },
      ]}
      outputs={[
        {
          id: "response",
        },
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};