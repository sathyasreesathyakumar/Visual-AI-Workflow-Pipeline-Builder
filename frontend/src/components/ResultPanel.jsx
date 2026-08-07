// export const ResultPanel = ({ result }) => {
//   return (
//     <div
//       style={{
//         width: "320px",
//         background: "#fff",
//         borderRadius: "16px",
//         padding: "20px",
//         boxShadow: "0 4px 12px rgba(0,0,0,.08)",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <h2
//         style={{
//           marginTop: 0,
//           color: "#1f2937",
//         }}
//       >
//         Validation Result
//       </h2>

//       {!result ? (
//         <div
//           style={{
//             background: "#f8fafc",
//             border: "1px solid #e5e7eb",
//             borderRadius: "10px",
//             padding: "15px",
//             color: "#64748b",
//           }}
//         >
//           No pipeline submitted yet.
//           <br />
//           Click <b>Submit Pipeline</b> to validate.
//         </div>
//       ) : (
//         <>
//           <div
//             style={{
//               background: result.is_dag ? "#dcfce7" : "#fee2e2",
//               color: "#111827",
//               borderRadius: "10px",
//               padding: "14px",
//               marginBottom: "20px",
//             }}
//           >
//             <strong>
//               {result.is_dag
//                 ? "✅ Pipeline is valid!"
//                 : "❌ Cycle detected"}
//             </strong>
//           </div>

//           <h3
//             style={{
//               marginBottom: "12px",
//             }}
//           >
//             Pipeline Summary
//           </h3>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "8px",
//             }}
//           >
//             <span>Total Nodes</span>
//             <strong>{result.num_nodes}</strong>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "8px",
//             }}
//           >
//             <span>Total Edges</span>
//             <strong>{result.num_edges}</strong>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <span>Is DAG</span>
//             <strong>{result.is_dag ? "Yes" : "No"}</strong>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };