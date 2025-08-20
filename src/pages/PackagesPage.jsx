import { useState } from "react";
import { Link } from "react-router";
import Divider from "../components/Divider";
import Tour_details from "../../public/tour_details.pdf";
import TourDetils from "../components/TourDetils";
import DestinationGallery from "../components/DestinationGallery";

const PackagesPage = () => {
  const fileUrl = Tour_details;
  const [flipTripOne, setFlipTripOne] = useState(false);

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
            <h3 className="text-2xl font-semibold text-[#512731] mb-5">Excursions Details</h3>
            <div className="">
              {/* trip 1 */}
              <div className="my-3">
                <div
                  className="flex items-center justify-between py-5 border-b-2 border-dashed border-[#d2bbb8] cursor-pointer"
                  onClick={() => setFlipTripOne(!flipTripOne)}
                >
                  <div className="flex items-center gap-8 ">
                    <p className="bg-[#512731] text-white px-5 py-1.5 text-md md:text-lg">Full day</p>{" "}
                    <p className="text-lg md:text-xl text-[#512731] font-bold">Spice farm - Prison Island- Stone Town</p>
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
