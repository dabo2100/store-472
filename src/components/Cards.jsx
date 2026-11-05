import { LuHeart, LuShoppingCart } from "react-icons/lu";
function formatPrice(price) {
  return "$" + Number(price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Cards({ theData, bgColor }) {
  return (
    <div className={"card flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white " + (bgColor || "")}>
      <figure className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={theData.imgSrc}
          alt={theData.name}
          className="size-full object-cover transition-transform duration-300 hover:scale-105"
        />

        <button
          type="button"
          aria-label={`Add ${theData.name} to wishlist`}
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:text-[#7C5CFC]"
        >
          <LuHeart className="size-4" strokeWidth={2} />
        </button>
      </figure>

      <div className="card-body flex flex-1 flex-col p-4">
        <h2 className="card-title text-sm font-semibold text-gray-900">
          {theData.name}
        </h2>
        <p className="text-xs text-gray-400">{theData.description}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="text-base font-bold text-gray-900">
            {formatPrice(theData.price)}
          </p>
          <button
            type="button"
            aria-label={`Add ${theData.name} to cart`}
            className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#7C5CFC] hover:text-[#7C5CFC]"
          >
            <LuShoppingCart className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
