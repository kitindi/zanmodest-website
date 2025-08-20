import { useState } from "react";
import { Link } from "react-router";
import Divider from "../components/Divider";
import TourDetils from "../components/TourDetils";
import DestinationGallery from "../components/DestinationGallery";

const PackagesPage = () => {
  const [flipTripOne, setFlipTripOne] = useState(false);

  return (
    <div className="w-full">
      <div className="px-4 md:px-0 w-full">
        <div className="w-full max-w-6xl mx-auto mt-10 md:mt-20">
          <div className="grid grid-cols-6 md:grid-cols-12">
            <div className="col-span-6 pr-4 ">
              <div className="w-full flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-[#512731]">Zanzibar Excursions</h3>
              </div>
              <p className=" text-[15px] leading-relaxed mb-3">
                Unveil the heart and soul of the Spice Islands on an enchanting journey through Zanzibar with Zanmodest. Immerse yourself in the living history
                of Stone Town, a UNESCO World Heritage site, as you wander through its ancient, labyrinthine alleys. Awaken your senses on a trip to a
                traditional Spice Farm, where you can taste, touch, and smell the exotic fruits and spices that gave the island its name.{" "}
              </p>

              <p className=" text-[15px] leading-relaxed  mb-3">
                Journey by boat to the historic Prison Island to meet its famous giant tortoise residents, or venture into the lush canopy of Jozani Forest for
                a rare encounter with the playful Red Colobus monkey. For those drawn to the sea, dive into the turquoise waters of Bawe Island on a
                breathtaking snorkeling expedition, discovering a vibrant underwater world of coral and marine life.
              </p>

              <p className=" text-[15px] leading-relaxed">
                {" "}
                Crafted for curious explorers and island dreamers, our packages are your gateway to Zanzibar's most iconic sites. Each trip promises a perfect
                blend of adventure, culture, and relaxation, creating unforgettable memories of this tropical paradise.
              </p>
            </div>
            <div className="col-span-6">
              <img src="images/zanzibar_svg.svg" alt="zanzibar map_svg" className="w-full min-h-0 h-full object-cover" />
            </div>
          </div>
          <div className="mt-20">
            <div className="">
              {/* trip 1 */}
              <div className="my-3">
                <div
                  className="flex items-center justify-between py-5 border-b-2 border-dashed border-[#d2bbb8] cursor-pointer"
                  onClick={() => setFlipTripOne(!flipTripOne)}
                >
                  <div className="flex items-center gap-8 ">
                    <p className="text-lg md:text-xl text-[#512731] font-bold">Excursion Prices in US$ - Valid from January 1, 2025, to December 31, 2026</p>
                  </div>
                  <div className="pr-10 flex items-end">
                    {!flipTripOne ? (
                      <span className="h-16 w-16 rounded-full flex flex-col items-center justify-center bg-[#512731] text-white text-xs">
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-eye-icon lucide-eye"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>
                    ) : (
                      <span className="h-16 w-16 rounded-full flex flex-col items-center justify-center bg-[#512731] text-white text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-eye-off-icon lucide-eye-off"
                        >
                          <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                          <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                          <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                          <path d="m2 2 20 20" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>

                {flipTripOne && <TourDetils />}
              </div>
              {/* trip 2  image gallary*/}
              <div>
                <DestinationGallery />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default PackagesPage;
