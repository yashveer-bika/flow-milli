import React from "react";
import { Navbar } from "./Navbar";

export function NavLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-32 w-screen">
        <Navbar />
      </div>

      {children}
    </div>
  );
}
