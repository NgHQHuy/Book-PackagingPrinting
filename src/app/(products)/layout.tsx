import React, { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full pt-14 flex min-h-[calc(100vh-80px)] max-md:flex-col">
      {children}
    </div>
  );
}
