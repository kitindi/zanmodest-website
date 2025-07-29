import React from "react";
import Divider from "./Divider";
// bg-[#ebe4de]

const Features = () => {
  return (
    <div className="w-full px-4 md:px-0 ">
      <Divider />
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 py-16 gap-10">
          <div className="">
            {" "}
            <h2 className="text-5xl text-[#512731] w-full max-w-2xl leading-tight font-medium">Let us be your guide on tailored journeys through Zanzibar.</h2>
          </div>
          <div className="pl-10">
            <p className=" text-[#512731] text-[16px] leading-relaxed mb-3">
              Zanmodest crafts personalized, modest-friendly tours that immerse you in Zanzibar’s vibrant Swahili culture, guided by passionate locals. Explore
              pristine beaches, historic Stone Town, and breathtaking natural wonders through mindful journeys that honor Islamic values and connect you to East
              Africa’s heart
            </p>

            <div className="grid grid-cols-2 gap-5 mt-5">
              {/* card */}
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/halal2.svg" alt="" className="w-32" />
                </div>
                <div>
                  {" "}
                  <p className="text-[15px] font-medium text-[#512731]">Modest-Friendly Tours</p>
                  <p className="text-[15px] font-normal leading-5 mt-2 text-[#512731]">
                    Modest journeys featuring culturally sensitive dining and dedicated prayer facilities.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/local1.svg" alt="" className="w-28" />
                </div>
                <div className="flex-grow">
                  <p className="text-[15px] font-medium text-[#512731]">Expert Local Guides</p>
                  <p className="text-[15px] font-normal leading-5 mt-2 text-[#512731]">
                    Muslim guides with deep knowledge of Zanzibar’s history and traditions
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/respect.svg" alt="" className="w-28" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-[#512731]">Cultural Respect</p>
                  <p className="text-[15px] font-normal leading-5 mt-2 text-[#512731]">
                    Modest, family-oriented adventures rooted in Zanzibar’s Islamic heritage
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <img src="/images/lisence2.svg" alt="" className="w-28" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-[#512731]">Licensed Operator</p>
                  <p className="text-[15px] font-normal leading-5 mt-2 text-[#512731]">
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
