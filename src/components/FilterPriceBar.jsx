import React from "react";

export default function FilterPriceBar() {
  return (
    <div className="w-full">
      <h3 className="mb-4 text-[11px] font-bold tracking-[1px] text-[#91a3bf]">
        PRICE RANGE
      </h3>

      <div className="relative flex h-6 items-center">
        <div className="absolute h-1.5 w-full rounded-full bg-[#e2e8f0]" />

        <div className="absolute left-[18%] right-[27%] h-1.5 rounded-full bg-[#655df5]" />

        <div className="absolute left-[18%] z-10 h-3.75 w-3.75 -translate-x-1/2 rounded-full border-2 border-[#655df5] bg-white" />

        <div className="absolute right-[27%] z-10 h-3.75 w-3.75 translate-x-1/2 rounded-full border-2 border-[#655df5] bg-white" />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-medium text-[#111827]">$150</span>

        <span className="text-sm font-medium text-[#111827]">$2,500</span>
      </div>
    </div>
  );
}
