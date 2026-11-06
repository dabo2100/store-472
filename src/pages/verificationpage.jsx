import { FiMail } from "react-icons/fi";
import img1 from "../assets/image1.svg";

export default function VerificationPage() {
  return (
    <div>
      <nav className="w-full bg-white  border-[#E2E8F0] border-2 py-4 flex justify-center ">
        <div className="w-full px-4 flex justify-between items-center">
          <h1 className="font-Inter text-[24px] max-sm:text-[18px] font-bold leading-8 max-sm:leading-6 whitespace-nowrap">
            ELECTRO
            <span className=" text-[#6366F1] font-Inter text-[24px] max-sm:text-[18px] font-bold leading-8 max-sm:leading-6 ">
              CORE
            </span>
          </h1>
          <div className="flex justify-center gap-2 max-sm:gap-1">
            <img className="max-sm:w-4 max-sm:h-4" src={img1} alt="" />
            <h2 className="text-[#62748E] font-Inter text-[14px] max-sm:text-[12px] font-medium leading-5 max-sm:leading-4 whitespace-nowrap">
              Back to Store
            </h2>
          </div>
        </div>
      </nav>

      <div className="w-full h-150 max-sm:h-auto max-sm:min-h-150 max-sm:py-8 bg-[#F8FAFC] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-Inter text-[30px] max-sm:text-[24px] font-black leading-9 max-sm:leading-7 text-center pb-5 ">
            Verify your email
          </h1>
          <p className="w-95 max-sm:w-[calc(100vw-2rem)] text-[#62748E] font-Inter text-[16px] max-sm:text-[14px] font-normal leading-6 max-sm:leading-5 text-center pb-5 ">
            We sent a 6-digit verification code to name@company.com
          </p>
        </div>

        <div className="w-125 max-sm:w-[calc(100vw-2rem)] h-100 max-sm:h-auto max-sm:py-6 max-sm:px-4 bg-white rounded-2xl border border-[#E2E8F0] flex flex-col pt-4 items-center">
          <div>
            <FiMail className="w-15 h-15 max-sm:w-12 max-sm:h-12 text-gray-500" />
          </div>

          <h1 className="font-Inter text-[30px] max-sm:text-[24px] font-black leading-9 max-sm:leading-7 text-center">
            Enter your code
          </h1>

          <p className="w-95 max-sm:w-full text-[#62748E] font-Inter text-[16px] max-sm:text-[14px] font-normal leading-6 max-sm:leading-5 text-center py-5 ">
            Enter the code below to verify your account.
          </p>

          <label className="otp pb-5 max-sm:scale-[0.9]">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <input
              type="text"
              autoComplete="one-time-code"
              inputMode="numeric"
              maxLength="6"
              pattern="[0-9]{6}"
              required
            />
          </label>

          <h1 className="text-[#62748E] font-Inter text-[14px] max-sm:text-[12px] font-normal leading-5 pb-5 text-center max-sm:px-2">
            Didn't receive a code?
            <span className="text-[#6366F1] font-Inter text-[14px] max-sm:text-[12px] font-bold leading-5">
              {" "}
              Resend code
            </span>
            <span className="text-[#62748E] font-Inter text-[14px] max-sm:text-[12px] font-normal leading-5 ">
              {" "}
              in 00:30
            </span>
          </h1>

          <div className="flex justify-center bg-[#6366F1] rounded-2xl px-18 max-sm:px-12 py-2.5 items-center gap-3.5 ">
            <h1 className="text-[#FFFFFF] font-Inter text-[18px] max-sm:text-[16px] font-bold leading-7">
              Verify Email
            </h1>
          </div>

          <h1 className="text-[#62748E] font-Inter text-[14px] max-sm:text-[12px] font-normal leading-5 pt-7">
            Change email address
          </h1>
        </div>
      </div>

      <div className="w-full h-16 bg-[#F8FAFC] flex justify-center items-center">
        <h1 className="text-[#90A1B9] font-Inter text-[12px] max-sm:text-[10px] font-normal leading-4 tracking-[1.2px] ">
          © 2024 ELECTROCORE PREMIUM STORE
        </h1>
      </div>
    </div>
  );
}
