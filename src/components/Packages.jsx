import React from "react";
import { Link } from "react-router";

const Packages = () => {
  return (
    <div className="w-full">
      <div className="px-4 md:px-0 w-full max-w-6xl mx-auto py-12">
        <h2 className="text-2xl md:text-3xl text-[#512731] leading-relaxed font-semibold text-center mb-4">Curated Travel Packages Just for You</h2>
        <p className="text-[16px] text-[#872731]  text-center max-w-3xl mx-auto mb-4 leading-relaxed">
          Discover Zanzibar's breathtaking scenery and vibrant cultures. Every location provides distinct adventures and experiences, ensuring lasting memories.
          Immerse yourself in Zanzibar's enchantment
        </p>
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-6 gap-4">
            {/* card - 1 */}
            <div className="hidden md:block col-start-1 col-end-2 row-start-1 row-end-5">
              <img src="/images/stown.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
            </div>
            {/* card - 2 */}
            <div className="col-start-2 col-end-3 row-start-1 row-end-3">
              <div className="h-70">
                <img src="/images/oldfort.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone Town + Spice Tour</p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* card - 3 */}
            <div className="col-start-3 col-end-3 row-start-1 row-end-3">
              <div className="h-70">
                <img src="/images/mnemba.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Mnemba Snorkelling + Quad Adventure </p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* card - 4 */}
            <div className="col-start-2 col-end-3 row-start-3 row-end-5">
              <div className="h-70">
                {" "}
                <img src="/images/stone-6.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day -Stone Town + Prison + Sandbank</p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* card - 5 */}
            <div className="col-start-3 col-end-4 row-start-3 row-end-5">
              <div className="h-70">
                {" "}
                <img src="/images/malindi.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>

              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest</p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* card - 6 */}
            <div className="col-start-2 col-end-3 row-start-5 row-end-7">
              <div className="h-70">
                {" "}
                <img src="/images/restaurant.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>{" "}
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - The Rock & Jozani Forest </p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* card - 7 */}
            <div className="col-start-3 col-end-4 row-start-5 row-end-7">
              <div className="h-70">
                {" "}
                <img src="/images/zanzibar-1.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>{" "}
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Jozani forest, Spaice farm</p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* card - 8 */}
            <div className="col-start-1 col-end-2 row-start-5 row-end-7">
              <div className="h-70">
                {" "}
                <img src="/images/redmonkey2.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Jozani Forest+ Prison Island</p>
                <div className="flex  items-center justify-end py-2 pr-10">
                  <Link to="/tour-packages" className="  bg-[#872731] text-white p-3 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-up-right-icon lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
