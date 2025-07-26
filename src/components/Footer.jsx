import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-start flex-col bg-[#d2bbb8] py-10 ">
      <div className="w-full flex items-center justify-between max-w-6xl mx-auto ">
        <div className="grid grid-cols-5">
          <div className="col-span-2 pr-32">
            <img src={`./images/brown-logo.svg`} alt="" className="w-38 mb-3" />
            <p className="text-sm leading-relaxed text-[#512731]">
              Zanmodest, a halal-friendly tourism brand by Khami & Sons in Zanzibar, offers personalized tours blending Swahili culture, stunning beaches, and
              eco-conscious adventures, connecting you to East Africa’s heart.
            </p>
            {/* social links */}
            <div>
              <ul className="flex gap-5 items-center mt-5">
                <li className="w-8 h-8 rounded-full flex justify-center items-center bg-[#512731] hover:bg-[#b46477]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook-icon lucide-facebook text-white"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </li>
                <li className="w-8 h-8 rounded-full flex justify-center items-center bg-[#512731] hover:bg-[#b46477]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram-icon lucide-instagram text-white"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </li>
                <li className="w-8 h-8 rounded-full flex justify-center items-center bg-[#512731] hover:bg-[#b46477]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook-icon lucide-facebook text-white"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </li>
              </ul>
              <p className="text-xs mt-3 text-[#512731] pt-3">
                &copy; Copyright {new Date().getFullYear()} Khami & Sons Tours and Safari (SMC-Private) Limited
              </p>
            </div>
          </div>
          {/* popular destination */}
          <div className="pt-8">
            <div>
              <span className="flex items-center gap-3 text-sm text-[#512731] font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-map-pin-icon lucide-map-pin text-[#512731]"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kianga, Zanzibar, Tanzania
              </span>
            </div>
            <div className="pt-14 px-2 text-[#522731]">
              <h3 className="font-medium mb-2">POPULAR DESTINATIONS</h3>
              <ul className="space-y-1.5 text-sm">
                <li>Paje Beach</li>
                <li>Jambiani Beach</li>
                <li>Nungwi</li>
              </ul>
            </div>
          </div>
          {/* Quick links */}
          <div className="pt-8">
            <div>
              <span className="flex items-center gap-3 text-sm text-[#512731] font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail-icon lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                travel@zanmodest.co.tz
              </span>
            </div>
            <div className="pt-14 px-2 text-[#522731]">
              <h3 className="font-medium mb-2">QUICKLINKS</h3>
              <ul className="space-y-1.5 text-sm">
                <li>Home</li>
                <li>About us</li>
                <li>Travel Guide</li>
                <li>FAQ Zanzibar</li>
              </ul>
            </div>
          </div>
          {/* Legal */}
          <div className="pt-8">
            <div>
              <span className="flex items-center gap-3 text-sm text-[#512731] font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-icon lucide-phone"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                +255 656 839 500
              </span>
            </div>
            <div className="pt-14 px-2 text-[#522731]">
              <h3 className="font-medium mb-2">LEGAL</h3>
              <ul className="space-y-1.5 text-sm">
                <li>Terms of service</li>
                <li>Booking terms</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
