import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "5px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: "8px",
          color: "#1e293b",
          fontSize: "22px",
        }}
      >
        Pipeline Components
      </h2>

      <p
        style={{
          marginTop: 0,
          color: "#64748b",
          fontSize: "15px",
        }}
      >
        Drag a component onto the canvas to start building your workflow.
      </p>

      <div
        style={{
          marginTop: "14px",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="pdfLoader" label="PDF Loader" />
        <DraggableNode type="webSearch" label="Web Search" />
        <DraggableNode type="database" label="Database" />
        <DraggableNode type="transformation" label="Transformation" />
        <DraggableNode type="fileSaver" label="File Saver" />
      </div>
    </div>
  );
};