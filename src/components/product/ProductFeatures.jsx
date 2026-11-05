import { LuTruck, LuShieldCheck } from "react-icons/lu";

export default function ProductFeatures() {
  return (
    <div className="mt-7 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-2">
      <div className="flex items-start gap-3">
        <LuTruck className="mt-0.5 size-5 shrink-0 text-gray-500" />

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Fast Shipping
          </p>

          <p className="text-xs text-gray-400">
            Free delivery on all orders
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <LuShieldCheck className="mt-0.5 size-5 shrink-0 text-gray-500" />

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Warranty
          </p>

          <p className="text-xs text-gray-400">
            2-Year official warranty
          </p>
        </div>
      </div>
    </div>
  );
}