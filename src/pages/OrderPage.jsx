import { useState } from "react";
import {
  FiFileText,
  FiMapPin,
  FiCalendar,
  FiPackage,
  FiMessageCircle,
  FiHeadphones,
  FiHome,
  FiShoppingBag,
  FiTruck,
  FiRefreshCw,
} from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";

export default function OrderPage() {
  const [order, setorder] = useState([
    {
      orderNumber: "EC-9481023",
      createdAt: "2024-05-24T14:45:00",
      // invoiceUrl: "/invoices/EC-9481023.pdf",
    },
  ]);
  const [product, setProducts] = useState([
    {
      name: "iPhone 15 pro Max",
      price: 1199.0,
      color: "Natural Titanium",
      specs: "256Gb",
      qty: 1,
      imgSrc:
        "https://m.media-amazon.com/images/I/717trh2j6CL._AC_UF894,1000_QL80_.jpg",
    },
    {
      name: "Sony WH-1000XM",
      price: 698.0,
      color: "Midnight Black",
      specs: "Noise Cancelling",
      qty: 2,
      imgSrc:
        "https://sonyworld.eg/cdn/shop/files/1_WH-1000XM6_standard_black-Large.jpg?v=1774244125&width=900",
    },
  ]);
  
  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-5">
        {/* Order Heading */}
        <div className="flex flex-col justify-between py-4 gap-4 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-widest text-[#8CA0BF]">
              <span>ACCOUNT</span>

              <FiChevronRight size={12} />

              <span>ORDERS</span>

              <FiChevronRight size={12} />

              <span className="text-[#111827]">TRACK ORDER</span>
            </div>

            <h1 className="text-3xl font-bold">
              Order #{order[0].orderNumber}
            </h1>

            <p className="text-xs text-[#8192AE]">
              Placed on{" "}
              {new Date(order[0].createdAt).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="btn btn-sm gap-2 border-[#E5EAF2] bg-transparent text-[11px] text-[#172033] shadow-none"
            >
              <FiFileText size={13} />
              Download Invoice
            </button>

            <button
              type="button"
              className="btn btn-sm gap-2 border-none bg-[#625CF5] text-[11px] text-white shadow-none"
            >
              <FiRefreshCw size={13} />
              Reorder Items
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,2.12fr)_minmax(0,1fr)]">
          {/* Left Column */}
          <div className="flex min-w-0 flex-col gap-6">
            {/* Tracking Status Card */}
            <div className="flex flex-col gap-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm font-bold text-[#111827]">
                  Tracking Status
                </h2>

                <span className="badge gap-1 border-none bg-[#EFEDFF] px-3 py-2 text-[9px] font-bold tracking-wide text-[#625CF5]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#625CF5]" />
                  SHIPPED
                </span>
              </div>

              {/* Tracking Steps */}
              <div className="relative grid grid-cols-4 gap-1">
                {/* Background Line */}
                <div className="absolute top-[15px] right-[12.5%] left-[12.5%] h-[2px] bg-[#E5EAF2]" />

                {/* Active Line */}
                <div className="absolute top-[15px] left-[12.5%] h-[2px] w-[50%] bg-[#625CF5]" />

                {[
                  {
                    title: "Ordered",
                    date: "May 24",
                    icon: <FiShoppingBag size={15} />,
                    active: true,
                  },
                  {
                    title: "Processing",
                    date: "May 25",
                    icon: <MdOutlineSettings size={16} />,
                    active: true,
                  },
                  {
                    title: "Shipped",
                    date: "May 26",
                    icon: <FiTruck size={16} />,
                    active: true,
                  },
                  {
                    title: "Delivered",
                    date: "Estimated May 28",
                    icon: <FiHome size={15} />,
                    active: false,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="relative flex min-w-0 flex-col items-center gap-1 text-center"
                  >
                    <div
                      className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border ${
                        step.active
                          ? "border-[#625CF5] bg-[#625CF5] text-white shadow-md"
                          : "border-[#DAE3EF] bg-white text-[#CBD5E1]"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div className="flex flex-col items-center gap-0.5">
                      <p
                        className={`text-[10px] font-bold ${
                          step.active ? "text-[#172033]" : "text-[#CDD6E4]"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p
                        className={`text-[9px] ${
                          step.active ? "text-[#91A0B7]" : "text-[#D1D9E5]"
                        }`}
                      >
                        {step.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Latest Update */}
              <div className="flex items-start gap-3 rounded-xl bg-[#F7F9FC] p-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#625CF5]">
                  <FiPackage size={14} />
                </div>

                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="text-xs font-bold text-[#172033]">
                    Package is on its way
                  </h3>

                  <p className="text-[11px] leading-relaxed text-[#8192AE]">
                    Latest Update: Your package has arrived at the local
                    distribution center in San Francisco and is expected to be
                    delivered by tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items Card */}
            <div className="flex flex-col gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <h2 className="text-sm font-bold text-[#111827]">Order Items</h2>

              <div className="flex flex-col divide-y divide-[#F0F2F6]">
                {product.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4">
                    {/* Product Image */}
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-[#F8FAFC]">
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Product Information */}
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <h3 className="text-xs font-bold text-[#111827]">
                        {item.name}
                      </h3>

                      <p className="text-[10px] text-[#8CA0BF]">
                        {item.color} · {item.specs}
                      </p>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex flex-col items-end gap-1 text-right">
                      <p className="text-xs font-bold text-[#111827]">
                        $
                        {item.price.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </p>

                      <p className="text-[10px] text-[#8CA0BF]">
                        Qty: {item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex min-w-0 flex-col gap-5">
            {/* Delivery Details Card */}
            <div className="flex flex-col gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h2 className="text-[10px] font-bold tracking-[1.5px] text-[#8CA0BF]">
                DELIVERY DETAILS
              </h2>

              {/* Shipping Address */}
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#8CA0BF]" size={17} />

                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-xs font-bold text-[#172033]">
                    Shipping Address
                  </h3>

                  <p className="text-[11px] leading-[1.8] text-[#8192AE]">
                    John Doe
                    <br />
                    123 Tech Lane, Suite 400
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="flex items-start gap-3">
                <FiCalendar className="text-[#8CA0BF]" size={17} />

                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="text-xs font-bold text-[#172033]">
                    Estimated Delivery
                  </h3>

                  <p className="text-[11px] text-[#8192AE]">
                    Wednesday, May 28, 2024
                  </p>

                  <span className="text-[9px] font-bold text-[#16A34A]">
                    ON SCHEDULE
                  </span>
                </div>
              </div>

              {/* Courier Service */}
              <div className="flex items-start gap-3">
                <FiPackage className="text-[#8CA0BF]" size={17} />

                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="text-xs font-bold text-[#172033]">
                    Courier Service
                  </h3>

                  <p className="text-[11px] text-[#8192AE]">
                    FedEx Express · FDX-9928172
                  </p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="flex flex-col gap-4 rounded-2xl bg-[#101729] p-6 text-white">
              <div className="flex flex-col gap-2">
                <h2 className="text-base font-bold">Need assistance?</h2>

                <p className="text-[11px] leading-relaxed text-[#94A3B8]">
                  Our dedicated support team is available 24/7 to help you with
                  any issues regarding your delivery.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className="btn btn-sm w-full gap-2 border-none bg-[#625CF5] text-[11px] text-white shadow-none"
                >
                  <FiMessageCircle size={14} />
                  Live Chat Support
                </button>

                <button
                  type="button"
                  className="btn btn-sm w-full gap-2 border-none bg-[#252E40] text-[11px] text-white shadow-none"
                >
                  <FiHeadphones size={14} />
                  Open Support Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
