import arrow from "./assets/Vector.svg";
import box from "./assets/SVG.png";
import phone from "./assets/Background+Border.svg";
import trash from "./assets/Trash.png";
import card from "./assets/SVG1.png";
import visa from "./assets/Background.svg";
import help from "./assets/Background.png";
import head from "./assets/headphones.svg";

export default function Cart() {
  return (
    <div className="bg-[#F8FAFC] flex">
      <section className="bg-[#F8FAFC] lg:ml-48 lg:mr-48 mb-20 ">
        <section className=" p-8 g-10 ">
          <nav className=" justify-between lg:flex">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className=" text-[#90A1B9] font-bold">STORE</p>
                <img src={arrow} className="w-1" />
                <p className="font-bold">SHOPPING CART</p>
              </div>
              <h1 className="font-bold text-[35px]">Shopping Cart</h1>
            </div>

            <div className="flex items-end gap-2">
              <img src={box} className="w-5.5 h-5.5" />
              <p>You have 3 items in your cart</p>
            </div>
          </nav>
        </section>
        <section className=" lg:flex p-8 lg:gap-10">
          <section>
            <section className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-t-4xl pl-9 pr-9 p-4 lg:visible">
              <div className=" flex justify-between ">
                <p>PRODUCT DETAILS</p>
                <div className="gap-44.5 flex ">
                  <p>QUANTITY</p> <p>PRICE</p>
                </div>
              </div>
            </section>
            <section className="border border-[#E2E8F0] rounded-b-4xl bg-white">
              <section className=" p-8">
                <div className="lg:flex lg:justify-between lg:items-center ">
                  <div className="flex items-center gap-6 lg:w-109.75">
                    <img src={phone} alt="" />
                    <div>
                      <h1 className="font-bold">iPhone 15 Pro Max</h1>
                      <p className="text-[#90A1B9] text-[12px]">
                        NATURAL TITANIUM · 256GB
                      </p>
                      <p className="text-[10px] text-[green]">IN STOCK</p>
                    </div>
                  </div>

                  <div className="gap-20 flex items-center">
                    <span className="bg-[#F1F5F9] pt-3.5 pb-3.5 p-5 gap-8 flex text-[20px] rounded-xl">
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </span>
                    <p className=" flex gap-5">
                      $1,199.00
                      <button>
                        <img src={trash} alt="" />
                      </button>
                    </p>
                  </div>
                </div>
              </section>
              <div className="h-px w-full border border-[#E2E8F0] "></div>
              <section className="p-8 ">
                <div className="lg:flex lg:justify-between lg:items-center ">
                  <div className="flex items-center gap-6 lg:w-109.75">
                    <img src={head} alt="" />
                    <div>
                      <h1 className="font-bold">Sony WH-1000XM5</h1>
                      <p className="text-[#90A1B9] text-[12px]">
                        MIDNIGHT BLACK · NOISE CANCELLING
                      </p>
                      <p className="text-[10px] text-[green]">IN STOCK</p>
                    </div>
                  </div>

                  <div className="gap-20 flex items-center">
                    <span className="bg-[#F1F5F9] pt-3.5 pb-3.5 p-5 gap-8 flex text-[20px] rounded-xl">
                      <button>-</button>
                      <p>2</p>
                      <button>+</button>
                    </span>
                    <p className=" flex gap-5">
                      $698.00
                      <button>
                        <img src={trash} alt="" />
                      </button>
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <div className="flex justify-between">
              <p className="text-[#6366F1] text-[12px]">Continue Shopping</p>
              <p className="text-[#90A1B9] text-[12px]">Clear Shopping Cart</p>
            </div>
          </section>
          <section className="flex flex-col gap-6">
            <section className="p-8 flex-col flex gap-4 bg-white border border-[#E2E8F0] rounded-4xl">
              <h1 className="text-xl font-bold ">Order Summary</h1>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="font-bold">$1,897.00</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated Shipping</p>
                <p className="font-bold text-green-700">Free</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p className="font-bold">$152.00</p>
              </div>
              <div className="h-px border border-[#E2E8F0]"></div>
              <div>
                <p className=" text-[#90A1B9]">TOTAL AMOUNT</p>
                <h1 className="font-bold text-3xl">$2,049.00</h1>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[10px] text-[#90A1B9]">APPLY PROMO CODE</p>
                <div className="flex gap-2 ">
                  <input
                    type="text"
                    placeholder="CODE10"
                    className="pl-7 border border-[#E2E8F0] rounded-xl bg-[#F8FAFC]"
                  />
                  <button className="pl-5 pr-5 p-2 text-[#0F172A] rounded-xl bg-[#F8FAFC]">
                    Apply
                  </button>
                </div>
                <button className="btn btn-primary w-full flex gap-2">
                  Checkout Now <img src={card} alt="" />
                </button>
                <div className="h-px  border border-[#E2E8F0] "></div>
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-[10px] text-[#90A1B9] ">
                    SECURE PAYMENT OPTIONS
                  </p>
                  <img src={visa} alt="" />
                </div>
              </div>
            </section>
            <div className="flex p-4 gap-2 bg-[#EEF2FF] border border-[#E0E7FF] rounded-3xl">
              <img src={help} className="w-10 h-10" />
              <div>
                <h1 className="text-[#312C85] text-[14px] font-bold">
                  Need Help?
                </h1>
                <p className="text-[12px] text-[#432DD7]">
                  Our experts are available 24/7 to assist with your order.
                </p>
                <p className="text-[12px] text-[#6366F1]">Chat with Support</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
