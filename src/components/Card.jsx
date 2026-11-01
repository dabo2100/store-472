import Iphone15ProMax from "../assets/Iphone15ProMax.png";
import PlusIcon from "../assets/PlusIcon.png";
import ButtonWishlist from "../assets/Button-Wishlist.png";
export default function Card() {
  return (
    <div className="flex flex-col gap-6 rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white w-full ">
      <div className="relative w-full ">
        <img
          src={Iphone15ProMax}
          alt="iPhone 15 Pro Max"
          className=" w-full h-auto"
        />
        <button className="cursor-pointer absolute top-5  right-5">
          <img src={ButtonWishlist} alt="Wishlist" />
        </button>
      </div>
      <div className="flex flex-col px-6 gap-1.5 pb-6">
        <div className="flex gap-2 items-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <p className="text-[#90A1B9] text-[12px] leading-4 font-regular">
            (2.3k)
          </p>
        </div>
        <h2 className="font-bold leading-6 text-[#0F172A]">
          iPhone 15 Pro Max
        </h2>
        <p className="text-[#62748E] text-[14px] leading-5 font-regular">
          Titanium build, A17 Pro chip.
        </p>
        <div className="flex justify-between items-center pt-5">
          <p className="text-[#0F172A] text-[20px] leading-6.5 font-bold">
            $1,199.00
          </p>
          <button className="bg-[#F1F5F9] text-[#0F172A] p-4 rounded-lg ">
            <img src={PlusIcon} alt="Add to Cart" />
          </button>
        </div>
      </div>
    </div>
  );
}
