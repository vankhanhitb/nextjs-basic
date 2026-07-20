import React from "react";

type DashBoardLayout= {
  children: React.ReactNode;
  revenue: React.ReactNode;
  charts: React.ReactNode;
}

export default function LayoutShop({
  children,
  revenue,
  charts
}:DashBoardLayout) {
  return (
    <div className="grid grid-cols-2">
      {children}
      <div className="grid grid-cols-2">
        {revenue}
        {charts}
      </div>
    </div>
  );
}
