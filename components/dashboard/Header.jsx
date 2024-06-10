"use client";

import React from "react";
import { History } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex">
        {/* Recent Activities */}
        <History />
        {/* Search */}
      </div>
      <div className="flex"></div>
    </div>
  );
}
