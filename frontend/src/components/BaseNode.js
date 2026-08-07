// BaseNode.jsx

import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  color = "#2563eb",
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {
  const getHandlePosition = (index, total) =>
    `${((index + 1) * 100) / (total + 1)}%`;

  return (
    <div
      style={{
        width: 220,
        minHeight: 80,
        border: `2px solid ${color}`,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 6px 18px rgba(0,0,0,.10)",
        padding: 12,
        position: "relative",
        transition: "all 0.2s ease",
        ...style,
      }}
    >
      {/* Input Handles */}
      {inputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={{
            background: color,
            width: 10,
            height: 10,
            top: getHandlePosition(index, inputs.length),
            ...handle.style,
          }}
        />
      ))}

      {/* Header */}
      <div
        style={{
          background: color,
          color: "#fff",
          padding: "8px 10px",
          borderRadius: 8,
          textAlign: "center",
          fontWeight: 600,
          fontSize: 15,
          marginBottom: 12,
        }}
      >
        {title}
      </div>

      {/* Node Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {children}
      </div>

      {/* Output Handles */}
      {outputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={`${id}-${handle.id}`}
          style={{
            background: color,
            width: 10,
            height: 10,
            top: getHandlePosition(index, outputs.length),
            ...handle.style,
          }}
        />
      ))}
    </div>
  );
};