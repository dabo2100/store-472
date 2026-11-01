import React from "react";
import Card from "./Cards";
import {ChevronDown} from "lucide-react";
import Cards from "./Cards";

export default function HomePageRS() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#0F172A] font-bold text-[30px] leading-9">
            Premium Electronics
          </h1>
          <p className="text-[#62748E] text-[14px] leading-5 font-normal">
            Showing 1-9 of 48 products
          </p>
        </div>
        <div className="relative flex items-center">
          <select className="appearance-none border border-[#E2E8F0] rounded-xl py-3 pl-4 pr-12 text-[14px] font-medium leading-5 text-[#0F172A] bg-white outline-none cursor-pointer">
            <option value="newest">Newest Arrivals</option>
            <option value="oldest">Oldest Arrivals</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <ChevronDown
            size={16}
            className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#94A3B8]"
          />
        </div>
      </div>
      <Cards />
    </div>
  );
}
