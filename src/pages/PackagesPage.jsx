import { useState } from "react";

const PackagesPage = () => {
  const [flipTripOne, setFlipTripOne] = useState(false);
  const [flipTripTwo, setFlipTripTwo] = useState(false);
  const [flipTripThree, setFlipTripThree] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // images for sliders

  const first_route_images = [
    "/images/stone-1.jpg",
    "/images/stone-2.jpg",
    "/images/stone-3.jpg",
    "/images/stone-4.jpg",
    "/images/prison-1.jpg",
    "/images/stone-6.jpg",
    "/images/stone-7.jpg",
  ];

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? first_route_images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === first_route_images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto mt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-7 pr-4 ">
            <div className="w-full flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-[#512731]">Zanzibar Excursions</h3>
            </div>
            <p className=" text-[15px] leading-relaxed mb-3">
              Unveil the heart and soul of the Spice Islands on an enchanting journey through Zanzibar with Zanmodest. Immerse yourself in the living history of
              Stone Town, a UNESCO World Heritage site, as you wander through its ancient, labyrinthine alleys. Awaken your senses on a trip to a traditional
              Spice Farm, where you can taste, touch, and smell the exotic fruits and spices that gave the island its name.{" "}
            </p>

            <p className=" text-[15px] leading-relaxed  mb-3">
              Journey by boat to the historic Prison Island to meet its famous giant tortoise residents, or venture into the lush canopy of Jozani Forest for a
              rare encounter with the playful Red Colobus monkey. For those drawn to the sea, dive into the turquoise waters of Bawe Island on a breathtaking
              snorkeling expedition, discovering a vibrant underwater world of coral and marine life.
            </p>

            <p className=" text-[15px] leading-relaxed">
              {" "}
              Crafted for curious explorers and island dreamers, our packages are your gateway to Zanzibar's most iconic sites. Each trip promises a perfect
              blend of adventure, culture, and relaxation, creating unforgettable memories of this tropical paradise.
            </p>
          </div>
          <div className="col-span-5">
            <img src="" alt="" />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-[#512731] mb-5">Detailed Excursions</h3>
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
                <div className="w-full mt-4 py-8 border-b-2 border-dashed border-[#d2bbb8]">
                  <div className="w-full grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                      <h3 className="text-[20px] font-semibold text-[#512731]">Tour Highlights</h3>
                      <h3 className="text-md font-semibold my-3 text-[#512731]">Spice Farm Tour</h3>
                      <p className="text-[15px] leading-relaxed">
                        Embark on a sensory journey through Zanzibar’s lush spice farms, where the air is alive with the scents of cloves, vanilla, and
                        cinnamon. Guided by our passionate local experts, you’ll explore vibrant plantations, learn about Zanzibar’s spice trade heritage, and
                        savor halal-friendly tastings of exotic fruits and teas
                      </p>
                      <h3 className="text-md font-semibold my-3 text-[#512731]">Prison Island Tour</h3>
                      <p className="text-[15px] leading-relaxed">
                        Discover the serene beauty of Prison Island, a tranquil escape just off Zanzibar’s coast. Expect a peaceful boat ride to this historic
                        isle, where you’ll meet gentle giant tortoises and explore the island’s intriguing past as a quarantine site. With halal-compliant
                        refreshments and prayer breaks arranged, our local guides ensure a modest, relaxing experience that blends nature, history, and the
                        soothing rhythm of Zanzibar’s turquoise waters
                      </p>
                      <h3 className="text-md font-semibold my-3 text-[#512731]">Stone Town Tour</h3>
                      <p className="text-[15px] leading-relaxed">
                        Step into the heart of Zanzibar’s UNESCO-listed Stone Town, where history and Swahili culture weave a captivating story. Stroll through
                        bustling markets, admire intricately carved doors, and visit iconic sites like the House of Wonders, guided by our knowledgeable locals.
                        With halal dining and prayer-friendly stops, this immersive tour invites you to connect respectfully with Zanzibar’s vibrant heritage in
                        a warm, welcoming way.
                      </p>
                      <div className="py-5 mt-3">
                        <p className="text-[18px] font-bold text-[#512731]">Duration: Starts 09:00 am – Ends 03:30 pm</p>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="relative w-full h-[60vh] overflow-hidden group">
                        <img src={first_route_images[currentIndex]} alt="" className="w-full min-h-0 h-full object-cover" />
                        {/* Left Arrow */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#512731]/80 text-white cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={prevSlide}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </div>

                        {/* Right Arrow */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#512731]/80 text-white cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={nextSlide}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </div>
                      </div>
                      {/* price details */}
                      <div></div>
                    </div>
                  </div>
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
