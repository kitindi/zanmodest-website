import { useState } from "react";

const PackagesPage = () => {
  const [flipTripOne, setFlipTripOne] = useState(false);
  const [flipTripTwo, setFlipTripTwo] = useState(false);
  const [flipTripThree, setFlipTripThree] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto mt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-8 pr-4 ">
            <div className="w-full flex justify-between items-center mb-8">
              <h3 className="text-3xl font-semibold text-[#512731]">Zanzibar Excursions</h3>
            </div>
            <p className="text-[#512731] text-[16px] leading-relaxed">
              Unveil the heart and soul of the Spice Islands on an enchanting journey through Zanzibar with Zanmodest. Immerse yourself in the living history of
              Stone Town, a UNESCO World Heritage site, as you wander through its ancient, labyrinthine alleys. Awaken your senses on a trip to a traditional
              Spice Farm, where you can taste, touch, and smell the exotic fruits and spices that gave the island its name.{" "}
            </p>
            <br></br>
            <p className="text-[#512731] text-[16px] leading-relaxed">
              Journey by boat to the historic Prison Island to meet its famous giant tortoise residents, or venture into the lush canopy of Jozani Forest for a
              rare encounter with the playful Red Colobus monkey. For those drawn to the sea, dive into the turquoise waters of Bawe Island on a breathtaking
              snorkeling expedition, discovering a vibrant underwater world of coral and marine life.
            </p>
            <br></br>
            <p className="text-[#512731] text-[16px] leading-relaxed">
              {" "}
              Crafted for curious explorers and island dreamers, our packages are your gateway to Zanzibar's most iconic sites. Each trip promises a perfect
              blend of adventure, culture, and relaxation, creating unforgettable memories of this tropical paradise.
            </p>
          </div>
          <div className="col-span-4">
            <img src="" alt="" />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-[#512731] mb-5">Detailed Excursions</h3>
          <div className="">
            {/* trip 1 */}
            <div className="my-3">
              <div
                className="flex items-center justify-between py-5 border-b-2 border-dashed border-[#d2bbb8] cursor-pointer"
                onClick={() => setFlipTripOne(!flipTripOne)}
              >
                <div className="flex items-center gap-8 ">
                  <p className="bg-[#512731] text-white px-5 py-1.5 text-lg">Full day</p>{" "}
                  <p className="text-xl text-[#512731] font-bold">Spice farm - Prison Island- Stone Town</p>
                </div>
                <div className="pr-10 flex items-end">
                  {!flipTripOne ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-down-icon lucide-chevron-down text-[#512731]"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  ) : (
                    <span>
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
                        class="lucide lucide-chevron-up-icon lucide-chevron-up"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>

              {flipTripOne && (
                <div className="mt-4 py-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime, quo facilis obcaecati voluptatum nostrum veniam reiciendis molestiae
                    tempore tempora.
                  </p>
                </div>
              )}
            </div>
            {/* trip 2*/}
            <div className="my-3">
              <div
                className="flex items-center justify-between py-5 border-b-2 border-dashed border-[#d2bbb8] cursor-pointer"
                onClick={() => setFlipTripTwo(!flipTripTwo)}
              >
                <div className="flex items-center gap-8 ">
                  <p className="bg-[#512731] text-white px-5 py-1.5 text-lg">Full day</p>{" "}
                  <p className="text-xl text-[#512731] font-bold">Spice farm - Prison Island- Stone Town</p>
                </div>
                <div className="pr-10 flex items-end">
                  {!flipTripTwo ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-down-icon lucide-chevron-down text-[#512731]"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  ) : (
                    <span>
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
                        class="lucide lucide-chevron-up-icon lucide-chevron-up"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>

              {flipTripTwo && (
                <div className="mt-4 py-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime, quo facilis obcaecati voluptatum nostrum veniam reiciendis molestiae
                    tempore tempora.
                  </p>
                </div>
              )}
            </div>
            {/* trip 3*/}
            <div className="my-3">
              <div
                className="flex items-center justify-between py-5 border-b-2 border-dashed border-[#d2bbb8] cursor-pointer"
                onClick={() => setFlipTripThree(!flipTripThree)}
              >
                <div className="flex items-center gap-8 ">
                  <p className="bg-[#512731] text-white px-5 py-1.5 text-lg">Full day</p>{" "}
                  <p className="text-xl text-[#512731] font-bold">Spice farm - Prison Island- Stone Town</p>
                </div>
                <div className="pr-10 flex items-end">
                  {!flipTripThree ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-down-icon lucide-chevron-down text-[#512731]"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  ) : (
                    <span>
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
                        class="lucide lucide-chevron-up-icon lucide-chevron-up"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>

              {flipTripThree && (
                <div className="mt-4 py-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime, quo facilis obcaecati voluptatum nostrum veniam reiciendis molestiae
                    tempore tempora.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
