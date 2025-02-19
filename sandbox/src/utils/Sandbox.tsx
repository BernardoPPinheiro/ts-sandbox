import React from "react";

export const Sandbox: React.FC<{ component: React.ReactNode }> = ({ component }) => {
  return <div style={{ padding: "20px", background: "#f4f4f4" }}>{component}</div>;
};
