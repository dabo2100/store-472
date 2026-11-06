import img1 from "../assets/image1.svg";
import img2 from "../assets/image2.svg";
import img3 from "../assets/image3.svg";
import img4 from "../assets/image4.svg";
import img6 from "../assets/image6.svg";
import img7 from "../assets/image7.svg";
import img8 from "../assets/image8.svg";
import img9 from "../assets/image9.svg";

export default function SignUP() {
  return (
    <div>
      <nav className="w-full bg-white border-[#E2E8F0] border-2 py-4 flex justify-center">
        <div className="w-full px-4 flex justify-between items-center">
          <h1 className="font-Inter text-[24px] max-sm:text-[18px] font-bold leading-8 max-sm:leading-6 whitespace-nowrap">
            ELECTRO
            <span className="text-[#6366F1] font-Inter text-[24px] max-sm:text-[18px] font-bold leading-8 max-sm:leading-6">
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
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-Inter text-[30px] max-sm:text-[24px] font-black leading-9 max-sm:leading-7 text-center">
            Create Account
          </h1>

          <p className="w-95 max-sm:w-full max-sm:px-4 text-[#62748E] font-Inter text-[16px] max-sm:text-[14px] font-normal leading-6 max-sm:leading-5 text-center py-1">
            Join ELECTROCORE for exclusive deals and faster checkout
          </p>

          <div className="w-100 max-sm:w-[calc(100vw-2rem)] rounded-2xl bg-white flex items-center flex-col border border-[#E2E8F0] shadow-[#0000001A] p-4">
            <div className="w-83 max-sm:w-full max-sm:px-1 rounded-3xl bg-white">
              <h1 className="text-[#90A1B9] font-Inter text-[8px] font-bold leading-2 tracking-[1.2px] pb-1">
                FULL NAME
              </h1>

              <div className="flex items-center bg-[#F8FAFC] rounded-md py-1.5 px-3 gap-2 border border-[#E2E8F0]">
                <img className="w-4 h-3.25" src={img8} alt="" />
                <input
                  className="text-gray-800 placeholder:text-[#00000080/50] placeholder:text-[14px] placeholder:font-Inter placeholder:leading-[100%] placeholder:font-medium w-full"
                  type="email"
                  placeholder="John Doe"
                />
              </div>

              <h1 className="text-[#90A1B9] font-Inter text-[8px] font-bold leading-2 tracking-[1.2px] pb-1 pt-3">
                EMAIL ADDRESS
              </h1>

              <div className="flex items-center bg-[#F8FAFC] rounded-md py-1.5 px-3 gap-2 border border-[#E2E8F0]">
                <img className="w-4 h-3.25 translate-y-0.5" src={img2} alt="" />
                <input
                  className="text-gray-800 placeholder:text-[#00000080/50] placeholder:text-[14px] placeholder:font-Inter placeholder:leading-[100%] placeholder:font-medium w-full"
                  type="email"
                  placeholder="name@company.com"
                />
              </div>

              <div className="flex items-center justify-between pt-3.5 pb-1">
                <h1 className="text-[#90A1B9] font-Inter text-[8px] font-bold leading-2 tracking-[1.2px]">
                  PASSWORD
                </h1>
              </div>

              <div className="flex items-center bg-[#F8FAFC] rounded-md py-1.5 px-3 gap-2 border border-[#E2E8F0] relative">
                <img
                  className="w-4 h-3.25 translate-y-0.1 absolute left-2"
                  src={img3}
                  alt=""
                />
                <input
                  className="text-gray-800 placeholder:text-[#00000080/50] placeholder:text-[14px] placeholder:font-Inter placeholder:leading-[100%] placeholder:font-medium placeholder:absolute placeholder:left-4 w-full"
                  type="email"
                  placeholder="......."
                />
                <img
                  className="w-4 h-3.25 translate-y-0. absolute right-2"
                  src={img4}
                  alt=""
                />
              </div>

              <div className="flex items-center justify-between pt-3.5 pb-1">
                <h1 className="text-[#90A1B9] font-Inter text-[8px] font-bold leading-2 tracking-[1.2px]">
                  CONFIRM PASSWORD
                </h1>
              </div>

              <div className="flex items-center bg-[#F8FAFC] rounded-md py-1.5 px-3 gap-2 border border-[#E2E8F0] relative">
                <img
                  className="w-4 h-3.25 translate-y-0.1 absolute left-2"
                  src={img3}
                  alt=""
                />
                <input
                  className="text-gray-800 placeholder:text-[#00000080/50] placeholder:text-[14px] placeholder:font-Inter placeholder:leading-[100%] placeholder:font-medium placeholder:absolute placeholder:left-4 w-full"
                  type="email"
                  placeholder="......."
                />
                <img
                  className="w-4 h-3.25 translate-y-0. absolute right-2"
                  src={img4}
                  alt=""
                />
              </div>

              <div className="py-3">
                <label className="label flex items-center gap-2 w-full">
                  <input type="checkbox" className="w-4 h-4 shrink-0" />

                  <span className="text-[#45556C] font-Inter text-[12px] max-sm:text-[10px] font-medium leading-4 ">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#6366F1] border-b border-black"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#6366F1] border-b border-black"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="flex justify-center bg-[#6366F1] rounded-2xl py-2.5 items-center gap-3.5">
                <h1 className="text-[#FFFFFF] font-Inter text-[18px] max-sm:text-[16px] font-bold leading-7">
                  Create Account
                </h1>
                <img src={img9} alt="" />
              </div>

              <div className="pt-9">
                <div className="relative flex items-center justify-center border-t border-[#90A1B9]/50">
                  <h1 className="absolute -top-2 font-Inter bg-white px-3 text-[12px] max-sm:text-[10px] font-bold leading-4 tracking-[1.2px] text-[#90A1B9] whitespace-nowrap">
                    OR SIGN UP WITH
                  </h1>
                </div>
              </div>

              <div className="flex justify-center gap-2 pt-8 max-sm:pt-10">
                <div className="h-10 px-6 max-sm:px-3 flex justify-center items-center border border-[#E2E8F0] gap-2 rounded-xl">
                  <img src={img7} alt="" />
                  <h1 className="text-[14px] max-sm:text-[13px] font-Inter font-bold leading-5 text-[#0F172A]">
                    Google
                  </h1>
                </div>

                <div>
                  <div className="h-10 px-12 max-sm:px-5 flex justify-center items-center border border-[#E2E8F0] gap-2 rounded-xl">
                    <img src={img6} alt="" />
                    <h1 className="text-[14px] max-sm:text-[13px] font-Inter font-bold leading-5 text-[#0F172A]">
                      Apple
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-[#62748E] font-Inter text-[14px] max-sm:text-[12px] font-normal leading-5 pt-2 text-center max-sm:px-4">
            Already have an account?
            <span className="text-[#6366F1] font-Inter text-[14px] max-sm:text-[12px] font-bold leading-5">
              {" "}
              Sign in here
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full h-16 bg-[#F8FAFC] flex justify-center items-center">
        <h1 className="text-[#90A1B9] font-Inter text-[12px] max-sm:text-[10px] font-normal leading-4 tracking-[1.2px] text-center">
          © 2024 ELECTROCORE PREMIUM STORE
        </h1>
      </div>
    </div>
  );
}
