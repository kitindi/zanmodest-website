import React from "react";

const Packages = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto py-20">
        <h2 className="text-5xl text-[#512731] leading-16 font-medium text-center mb-4">Curated Travel Packages Just for You</h2>
        <p className="text-xl text-[#872731]  text-center max-w-3xl mx-auto mb-4 leading-relaxed">
          Discover Zanzibar's breathtaking scenery and vibrant cultures. Every location provides distinct adventures and experiences, ensuring lasting memories.
          Immerse yourself in Zanzibar's enchantment
        </p>
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-3 grid-rows-6 gap-4">
            {/* card - 1 */}
            <div className="col-start-1 col-end-2 row-start-1 row-end-5">
              <img src="/images/zanz.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
            </div>
            {/* card - 2 */}
            <div className="col-start-2 col-end-3 row-start-1 row-end-3">
              <div className="h-56">
                <img src="/images/oldfort.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card - 3 */}
            <div className="col-start-3 col-end-3 row-start-1 row-end-3">
              <div className="h-56">
                <img src="/images/mnemba.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card - 4 */}
            <div className="col-start-2 col-end-3 row-start-3 row-end-5">
              <div className="h-56">
                {" "}
                <img src="/images/stone-town.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card - 5 */}
            <div className="col-start-3 col-end-4 row-start-3 row-end-5">
              <div className="h-56">
                {" "}
                <img src="/images/malindi.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>

              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card - 6 */}
            <div className="col-start-2 col-end-3 row-start-5 row-end-7">
              <div className="h-56">
                {" "}
                <img src="/images/restaurant.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>{" "}
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card - 7 */}
            <div className="col-start-3 col-end-4 row-start-5 row-end-7">
              <div className="h-56">
                {" "}
                <img src="/images/zanzibar-1.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>{" "}
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card - 8 */}
            <div className="col-start-1 col-end-2 row-start-5 row-end-7">
              <div className="h-56">
                {" "}
                <img src="/images/redmonkey2.jpg" alt="" className="w-full object-cover min-h-0 h-full" />
              </div>
              <div className="py-2">
                <p className="text-md font-medium text-[#872731]">Full Day - Stone town, Jozani forest, Spaice farm</p>
                <div className="flex justify-between items-center py-2">
                  <div className="text-[#872731] font-medium text-sm">
                    Start from <span className="font-bold">$25</span> person
                  </div>
                  <div>
                    <button className="border-none bg-[#872731] text-white px-2.5 py-1.5">Book Now</button>
                  </div>
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
