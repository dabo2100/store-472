import { LuMinus, LuPlus, LuShoppingCart } from "react-icons/lu";

export default function ProductActions({ quantity, setQuantity }) {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <div className="flex items-center justify-between rounded-xl bg-gray-100 px-2 sm:w-36">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex size-10 items-center justify-center text-gray-500 transition hover:text-gray-900"
        >
          <LuMinus className="size-4" />
        </button>

        <span className="text-sm font-semibold text-gray-900">{quantity}</span>

        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => q + 1)}
          className="flex size-10 items-center justify-center text-gray-500 transition hover:text-gray-900"
        >
          <LuPlus className="size-4" />
        </button>
      </div>

      <button
        type="button"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#7C5CFC] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6B4BE8]"
      >
        Add to Cart
        <LuShoppingCart className="size-4" />
      </button>
    </div>
  );
}
