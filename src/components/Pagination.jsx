import PagLeftArrow from "../assets/PagLeftArrow.png";
import PagRightArrow from "../assets/PagRightArrow.png";

export default function Pagination() {
  return (
    <div className="join items-center gap-2 ">
      <button className="join-item btn btn-square rounded-xl bg-[#E2E8F0] opacity-50">
        <img src={PagRightArrow} alt="Next" />
      </button>

      <button className="join-item btn btn-square rounded-xl border border-[#E2E8F0] bg-white text-[#45556C] leading-6 font-normal focus:bg-[#6366F1] focus:text-white">
        1
      </button>

      <button className="join-item btn btn-square rounded-xl border border-[#E2E8F0] bg-white text-[#45556C] leading-6 font-normal focus:bg-[#6366F1] focus:text-white">
        2
      </button>

      <button className="btn btn-square rounded-xl">
        <img src={PagLeftArrow} alt="Previous" />
      </button>

      {/* Next */}
    </div>
  );
}
