import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
  import Cards from "./cards";
import product from "./ProductData";

export default function RelatedProducts() {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Related Products</h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous products"
            className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#7C5CFC] hover:text-[#7C5CFC]"
          >
            <LuChevronLeft className="size-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next products"
            className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#7C5CFC] hover:text-[#7C5CFC]"
          >
            <LuChevronRight className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {product.map((el, index) => (
          <Cards key={index} theData={el} />
        ))}
      </div>
    </div>
  );
}
