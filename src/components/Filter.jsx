import React from "react";
import FilterCategories from "./FilterCategories";
import Brand from "./Brand";

export default function Filter() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] leading-7 text-[#0F172A]">
          Filters
        </p>
        <button className="font-semibold text-[12px] leading-4 text-[#6366F1]">
          Reset all
        </button>
      </div>
      <FilterCategories />
      <Brand />
    </div>
  );
}
