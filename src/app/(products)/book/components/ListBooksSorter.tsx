"use client";
import React, { useState } from "react";

interface FilterProps {
  template?: string;
}

const ListBooksSorter: React.FC<FilterProps> = () => {
  type filterType = {
    status: string;
    price: string;
  };
  const [filter, setFilter] = useState<filterType>({
    status: "latest",
    price: "normal",
  });

  return (
    <div className="w-fit h-full flex items-center text-sm box-border bg-white">
      <div
        className={`h-full px-2 flex items-center cursor-pointer hover:bg-gray-200 ${
          filter.status === "latest" && "bg-slate-300"
        }`}
        onClick={() => setFilter({ ...filter, status: "latest" })}
      >
        <span>Latest</span>
      </div>
      <div className="w-[1px] h-full bg-gray-200"></div>
      <div
        className={`h-full px-2 flex items-center cursor-pointer hover:bg-gray-200 ${
          filter.status === "top-sales" && "bg-slate-300"
        }`}
        onClick={() => setFilter({ ...filter, status: "top-sales" })}
      >
        <span>Top sales</span>
      </div>
      <div className="w-[1px] h-full bg-gray-200"></div>
      <div className="h-full px-2 flex items-center py-1">
        <select
          className="h-full border border-gray-400 rounded-md outline-none cursor-pointer"
          onChange={(e) => setFilter({ ...filter, price: e.target.value })}
        >
          <option value="normal">Normal</option>
          <option value="low2high">Low to High</option>
          <option value="high2low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ListBooksSorter;
