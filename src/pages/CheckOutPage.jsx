import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPackage, LuCreditCard, LuLockKeyhole } from "react-icons/lu";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import iphone from "./iphone.png";
import headphones from "./headphones.png";

export default function CheckOutPage() {
  return (
    <div
      className="w-full flex flex-col items-center font-inter bg-[#F8FAFC]"
      data-theme="light"
    >
      <div className="container flex flex-col gap-8 pb-12">
        <div className="flex flex-col gap-4 pt-12">
          <div className="flex gap-2 items-center">
            <p className="font-inter text-[12px] text-[#90A1B9] font-bold">
              CART
            </p>
            <p className="font-inter text-[12px] text-[#90A1B9] relative top-0.5">
              <MdOutlineKeyboardArrowRight />
            </p>
            <p className="font-inter text-[12px] text-[#0F172A] font-black">
              CHECKOUT
            </p>
          </div>
          <div className="font-inter text-[#0F172A] font-bold">Checkout</div>
        </div>

        <div className="flex gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="w-172.25 border border-[#E2E8F0] rounded-3xl p-8 gap-8 flex flex-col bg-[#FFFFFF]">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                  <IoLocationOutline className="text-[#6366F1] text-2xl" />
                </div>
                <p className="font-inter font-bold text-[20px] pt-1 ">
                  Shipping Information
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label>FULL NAME</label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 font-medium"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>EMAIL ADDRESS</label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 font-medium"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>STREET ADDRESS</label>
                  <input
                    className="w-full h-12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 font-medium"
                    type="text"
                    placeholder="123 Tech Lane"
                  />
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <label>CITY</label>
                    <input
                      type="text"
                      placeholder="San Francisco"
                      className="w-full h-12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <label>ZIP CODE</label>
                    <input
                      type="text"
                      placeholder="94103"
                      className="w-full h-12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-172.25 border border-[#E2E8F0] rounded-3xl p-8 flex flex-col gap-8 bg-white">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                  <LuPackage className="text-[#6366F1] text-xl" />
                </div>

                <h2 className="font-inter font-bold text-[20px] text-[#0F172A]">
                  Delivery Method
                </h2>
              </div>

              <div className="flex gap-4">
                <label className="flex-1 flex items-center gap-3 border-2 border-[#6366F1] rounded-xl p-4 bg-[#F8FAFC] cursor-pointer">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    defaultChecked
                    className="accent-[#6366F1]"
                  />

                  <div className="flex-1 flex flex-col">
                    <span className="font-inter text-[12px] font-bold text-[#0F172A]">
                      Standard Delivery
                    </span>
                    <span className="font-inter text-[11px] text-[#62748E]">
                      3-5 business days
                    </span>
                  </div>

                  <span className="font-inter text-[12px] font-bold text-[#6366F1]">
                    Free
                  </span>
                </label>

                <label className="flex-1 flex items-center gap-3 border border-[#E2E8F0] rounded-xl p-4 cursor-pointer">
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    className="accent-[#6366F1]"
                  />

                  <div className="flex-1 flex flex-col">
                    <span className="font-inter text-[12px] font-bold text-[#0F172A]">
                      Express Delivery
                    </span>
                    <span className="font-inter text-[11px] text-[#62748E]">
                      Next business day
                    </span>
                  </div>

                  <span className="font-inter text-[12px] font-bold text-[#0F172A]">
                    $25.00
                  </span>
                </label>
              </div>
            </div>
            <div className="w-172.25 border border-[#E2E8F0] rounded-3xl p-8 flex flex-col gap-8 bg-white">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
                  <LuCreditCard className="text-[#6366F1] text-xl" />
                </div>

                <h2 className="font-inter font-bold text-[20px] text-[#0F172A]">
                  Payment Method
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-4 border-2 border-[#6366F1] rounded-xl p-4 bg-[#F8FAFC] cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    defaultChecked
                    className="accent-[#6366F1]"
                  />

                  <div className="flex-1 flex flex-col">
                    <span className="font-inter font-bold text-[14px] text-[#0F172A]">
                      Credit / Debit Card
                    </span>
                    <span className="font-inter text-[11px] text-[#64748B]">
                      Secure payment via encrypted gateway
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-2xl">
                    <FaCcVisa className="text-[#1A1F71]" />
                    <FaCcMastercard className="text-[#EB001B]" />
                  </div>
                </label>

                <div className="flex flex-col gap-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl p-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[10px] font-bold tracking-[1px] text-[#90A1B9]">
                      CARD NUMBER
                    </label>

                    <div className="flex items-center border border-[#E2E8F0] rounded-xl bg-white px-4">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full h-11 outline-none font-mono text-[14px]"
                      />

                      <LuLockKeyhole className="text-[#CBD5E1] text-xl" />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="font-inter text-[10px] font-bold tracking-[1px] text-[#90A1B9]">
                        EXPIRY DATE
                      </label>

                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full h-11 rounded-xl border border-[#E2E8F0] bg-white px-4 outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <label className="font-inter text-[10px] font-bold tracking-[1px] text-[#90A1B9]">
                        CVC / CVV
                      </label>

                      <input
                        type="text"
                        placeholder="123"
                        className="w-full h-11 rounded-xl border border-[#E2E8F0] bg-white px-4 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-4 border border-[#E2E8F0] rounded-xl p-4 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    className="accent-[#6366F1]"
                  />

                  <div className="flex-1 flex flex-col">
                    <span className="font-inter font-bold text-[14px] text-[#0F172A]">
                      PayPal
                    </span>

                    <span className="font-inter text-[11px] text-[#64748B]">
                      Fast and secure checkout with PayPal
                    </span>
                  </div>

                  <FaPaypal className="text-[#003087] text-2xl" />
                </label>
              </div>
            </div>
          </div>
          <div className="w-119.75 h-163.75 rounded-3xl bg-white border border-[#E2E8F0] p-8 flex flex-col gap-8">
            <h2 className="font-bold text-[20px] text-[#0F172A]">
              Order Summary
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={iphone}
                  alt="iPhone 15 Pro Max"
                  className="size-14 rounded-xl object-cover"
                />

                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-bold text-[12px] text-[#0F172A]">
                    iPhone 15 Pro Max
                  </p>

                  <p className="text-[10px] text-[#64748B]">
                    Qty: 1 · Natural Titanium
                  </p>
                </div>

                <p className="font-bold text-[12px] text-[#0F172A]">
                  $1,199.00
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={headphones}
                  alt="Sony WH-1000XM5"
                  className="size-14 rounded-xl object-cover"
                />

                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-bold text-[12px] text-[#0F172A]">
                    Sony WH-1000XM5
                  </p>

                  <p className="text-[10px] text-[#64748B]">Qty: 2 · Black</p>
                </div>

                <p className="font-bold text-[12px] text-[#0F172A]">$698.00</p>
              </div>
            </div>

            <div className="w-full border-t border-[#F1F5F9]"></div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-[13px] text-[#64748B]">Subtotal</span>
                <span className="text-[13px] font-bold text-[#0F172A]">
                  $1,897.00
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13px] text-[#64748B]">Shipping</span>
                <span className="text-[13px] font-bold text-[#00A63E]">
                  Free
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[13px] text-[#64748B]">
                  Estimated Tax
                </span>
                <span className="text-[13px] font-bold text-[#0F172A]">
                  $152.00
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-bold text-[14px] text-[#0F172A]">
                Total
              </span>

              <span className="font-extrabold text-[28px] text-[#6366F1]">
                $2,049.00
              </span>
            </div>

            <button
              type="button"
              className="w-full h-12 bg-[#6366F1] text-white rounded-xl flex items-center justify-center gap-3 font-bold cursor-pointer"
            >
              Pay $2,049.00
              <MdOutlineArrowForward className="text-xl" />
            </button>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <LuShieldCheck className="text-[#00C950] text-[14px]" />

                <span className="text-[9px] font-bold tracking-[1px] text-[#90A1B9]">
                  SECURE SSL ENCRYPTION
                </span>
              </div>

              <div className="flex items-center gap-5 text-[24px]">
                <FaCcVisa className="text-[#A5B4D0]" />
                <FaCcMastercard className="text-[#F9A8B4]" />
                <FaPaypal className="text-[#A5B4D0]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full h-30 bg-white border-t border-[#E2E8F0] flex flex-col items-center justify-center gap-2">
        <p className="font-inter font-medium text-[12px] text-[#90A1B9] text-center">
          © 2024 ELECTROCORE PREMIUM STORE. ALL RIGHTS RESERVED.
        </p>

        <p className="font-inter font-normal text-[10px] text-[#CAD5E2] text-center">
          By completing your purchase you agree to our Terms of Service and
          Privacy Policy.
        </p>
      </footer>
    </div>
  );
}
