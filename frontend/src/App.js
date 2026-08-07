import { useState } from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { ResultPanel } from "./components/ResultPanel";

function App() {
  const [pipelineResult, setPipelineResult] = useState(null);

  return (
    <div
      style={{
        height: "100vh",
        background: "#f3f6fb",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "28px",
            color: "#1e293b",
          }}
        >
          <center>AI Pipeline Builder</center>
        </h1>
        
      </div>

      {/* Toolbar */}
      <PipelineToolbar />

      {/* Main Layout */}
      {/* <div
        style={{
          display: "flex",
          gap: "20px",
          flex: 1,
          marginTop: "16px",
          minHeight: 0,
        }}
      > */}
        {/* Canvas */}
        <div style={{ flex: 1, marginTop: "16px",
          minHeight: 0, }}>
          <PipelineUI />
        </div>

        {/* Right Sidebar */}
        {/* <div
          style={{
            width: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <ResultPanel result={pipelineResult} />
        </div> */}
          <SubmitButton 
            setPipelineResult={setPipelineResult}
          />
        
      {/* </div> */}
    </div>
  );
}

export default App;