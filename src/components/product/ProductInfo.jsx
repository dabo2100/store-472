import { LuStar, LuStarHalf } from "react-icons/lu";

export default function ProductInfo() {
  return (
    <div>
      <span className="inline-flex rounded-md bg-[#EDE9FE] px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#7C5CFC] uppercase">
        New Arrival
      </span>

      <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        iPhone 15 Pro Max
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center text-amber-400">
          <LuStar className="size-4 fill-current" />
          <LuStar className="size-4 fill-current" />
          <LuStar className="size-4 fill-current" />
          <LuStar className="size-4 fill-current" />
          <LuStarHalf className="size-4 fill-current" />
        </div>

        <span className="text-sm font-semibold text-gray-900">4.9</span>

        <span className="text-sm text-gray-400">
          (1,264 Verified Reviews)
        </span>
      </div>

      <div className="mt-5 flex items-end gap-3">
        <span className="text-3xl font-bold text-gray-900 sm:text-4xl">
          $1,199.00
        </span>

        <span className="pb-1 text-lg text-gray-400 line-through">
          $1,399.00
        </span>
      </div>

      <p className="mt-1 text-sm text-gray-500">
        Or $49.95/mo. for 24 mos. with 0% APR
      </p>
    </div>
  );
}