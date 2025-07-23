import React from "react";
import Divider from "./Divider";
// bg-[#ebe4de]

const Features = () => {
  return (
    <div className="w-full ">
      <Divider />
      <div className="w-full max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-2 py-20">
          <div className="pr-32">
            {" "}
            <h2 className="text-5xl text-[#512731] w-full max-w-2xl leading-16 font-medium">Let us be your guide on tailored journeys through Zanzibar.</h2>
          </div>
          <div>
            <p className=" text-[#512731] text-xl leading-relaxed mb-10">
              Zanmodest crafts personalized, halal-friendly tours that immerse you in Zanzibar’s vibrant Swahili culture, guided by passionate locals. Explore
              pristine beaches, historic Stone Town, and breathtaking natural wonders through mindful journeys that honor Islamic values and connect you to East
              Africa’s heart
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              {/* card */}
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/halal2.svg" alt="" className="w-32" />
                </div>
                <div>
                  {" "}
                  <p className="text-lg font-medium text-[#512731]">Modest-Friendly Tours</p>
                  <p className="text-md font-normal leading-5 mt-2 text-[#512731]">
                    Modest journeys featuring culturally sensitive dining and dedicated prayer facilities.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/local1.svg" alt="" className="w-28" />
                </div>
                <div className="flex-grow">
                  <p className="text-lg font-medium text-[#512731]">Expert Local Guides</p>
                  <p className="text-md font-normal leading-5 mt-2 text-[#512731]">Muslim guides with deep knowledge of Zanzibar’s history and traditions</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/respect.svg" alt="" className="w-28" />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#512731]">Cultural Respect</p>
                  <p className="text-md font-normal leading-5 mt-2 text-[#512731]">Modest, family-oriented adventures rooted in Zanzibar’s Islamic heritage</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/lisence2.svg" alt="" className="w-28" />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#512731]">Licensed Operator</p>
                  <p className="text-md font-normal leading-5 mt-2 text-[#512731]">
                    Approved for tour operating activities by the Ministry of Natural Resources and Tourism
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
