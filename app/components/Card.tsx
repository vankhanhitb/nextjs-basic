import React from "react";

export const Card = ({children}: {children: React.ReactNode}) => {
  const cardStyle = {
    padding: "10px",
    margin: "10px",
    boxShadown: "0 4px 8px 0 rgba(0,0,0 0.2)",
    border: "1px solid #ddd",
    display: "flex",
    minHeight: "300px",
    justifyContent: "center",
    alignItens: "center"
  }
  return (
    <div style={cardStyle}>
      {children}
    </div>
  )
}