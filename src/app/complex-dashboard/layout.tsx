import { log } from "node:util";
import React from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode
  login: React.ReactNode
}){

  const isLogin = true;

  return isLogin ? (
    <>
      <div className="w-full">{children}</div>
      <div className="flex flex-12 w-full content-center">
        <div className="flex flex-col flex-7 content-center">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-5">
          {notifications}
        </div>
      </div>
    </>
  ):(
    <>
      {login}
    </>
  )
}