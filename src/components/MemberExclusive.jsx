import React from "react";

export default function MemberExclusive() {
  return (
    <div className="bg-[#0F172A] rounded-3xl p-6 flex flex-col gap-2">
      <p className="font-bold text-[10px] leading-3.75 tracking-[1px] text-[#6366F1]">
        MEMBER EXCLUSIVE
      </p>
      <p className="font-bold text-[24px] leading-8 text-white">
        Free Shipping
      </p>
      <p className="font-regular text-[14px] leading-5 text-[#90A1B9]">
        On all orders above $500. Join our rewards program today.
      </p>
      <button className="text-[#0F172A] text=[14px] leading-5 bg-white rounded-xl py-3">
        Learn More
      </button>
    </div>
  );
}
