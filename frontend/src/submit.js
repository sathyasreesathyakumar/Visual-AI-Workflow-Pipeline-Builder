import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const result = await response.json();

      alert(
        `Pipeline Analysis

Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "✅ Yes" : "❌ No"}`
      );
    } catch (err) {
      console.error(err);

      alert("Unable to connect to backend.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "16px",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "12px 32px",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(37,99,235,.25)",
        }}
      >
        🚀 Submit Pipeline
      </button>
    </div>
  );
};