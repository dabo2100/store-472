import HomePageLS from "../components/HomePageLS";
import HomePageRS from "../components/HomePageRS";
import Pagination from "../components/Pagination";

export default function HomePage() {
  return (
    <div className="flex justify-center bg-[#F8FAFC] py-8 ">
      <div className="container grid grid-cols-1 gap-12 px-4  lg:grid-cols-4 lg:px-0">
        <div className="w-full col-span-1">
          <HomePageLS />
        </div>

        <div className="w-full col-span-1   lg:col-span-3">
          <HomePageRS />
        </div>
        <div className="w-full col-span-1  lg:col-span-4 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
