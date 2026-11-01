import React from "react";

export default function Brand() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#90A1B9] text-[12px] font-bold leading-4 tracking-[1.2px]">
        BRANDS
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 rounded-lg border border-[#E2E8F0] text-[#45556C]">
          Apple
        </button>
        <button className="py-2 rounded-lg border border-[#E2E8F0] text-[#45556C]">
          Samsung
        </button>
        <button className="py-2 rounded-lg border border-[#E2E8F0] text-[#45556C]">
          Sony
        </button>
        <button className="py-2 rounded-lg border border-[#E2E8F0] text-[#45556C]">
          Bose
        </button>
      </div>
    </div>
  );
}
