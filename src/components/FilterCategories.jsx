import React from "react";
import FilterPriceBar from "./FilterPriceBar";

export default function FilterCategories() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-[#90A1B9] text-[12px] leading-4 tracking-[1.2px]">
        CATEGORIES
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <input type="checkbox" className="accent-[#6366F1]" />
            <p className="text-[#45556C] font-regular text-[14px] leading-5">
              Smartphones
            </p>
          </div>
          <p>128</p>
        </div>
        <FilterPriceBar />
      </div>
    </div>
  );
}
