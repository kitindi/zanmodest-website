import { Link } from "react-router";
import Divider from "../components/Divider";

const About = () => {
  return (
    <div className="w-full   ">
      <div className=" relative  w-full h-[30vh] bg-[url(/images/hero-1.jpg)] bg-cover bg-center bg-no-repeat flex flex-row items-center">
        <div className="px-4 md:px-0 w-full max-w-6xl mx-auto z-30 ">
          <h3 className="text-3xl md:text-4xl text-white font-bold">Travel with Faith & Tranquility</h3>
          <p className="text-xl md:text-2xl text-white font-bold mt-3">Discover the Soul of Zanzibar, Modestly.</p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-10"></div>
      </div>
      <div className="px-4 md:px-0 w-full max-w-6xl mx-auto py-10">
        <h3 className="text-xl font-bold  text-[#512731]">Our Philosophy: The Essence of Modest Travel</h3>
        <p className="text-xl font-bold my-8 text-[#512731]">In the name of Allah, the Most Merciful, the Grantor of Mercy.</p>
        <p className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef">
          At Zanmodest, we believe that travel is an extension of one's character and faith. Islam is built upon the foundation of ḥayāʾ—a profound sense of
          modesty, conscientiousness, and dignity that guides our actions, speech, and interactions. It is more than just attire; it is the "signature character
          trait of Islam," a virtue that beautifies our relationship with our Creator and His creation.
        </p>
        <p className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef">
          Inspired by this principle, we founded Zanmodest to offer a different kind of journey. A journey where you can immerse yourself in the breathtaking
          beauty of Zanzibar without compromising the values you hold dear. We are dedicated to curating experiences that are not only memorable but also
          spiritually uplifting, allowing you to explore the world in a way that is in harmony with your beliefs.
        </p>
        <h3 className="mt-10 text-xl font-bold text-[#512731]">What is Halal-Friendly & Modest Tourism?</h3>
        <p className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef">
          For us, modest tourism is a holistic approach that goes beyond the surface. It is the assurance of a comfortable, respectful, and faith-aligned
          environment throughout your entire vacation.
        </p>
        <ul className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef flex flex-col gap-3 list-disc pl-10">
          <li>It's the peace of mind that comes from knowing all your meals are halal-certified.</li>
          <li>It's the freedom to explore without worry, with prayer times integrated into your itineraries.</li>
          <li>It's the comfort of engaging in family-friendly activities that respect privacy and avoid indecency.</li>
          <li>It's the confidence of being guided by local experts who understand and share your commitment to modesty and respectful conduct</li>
        </ul>
        <p className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef">
          This is the standard we uphold in every tour we design—creating a sanctuary for you and your loved ones to connect with Zanzibar's rich Islamic
          heritage and stunning natural wonders.
        </p>
        <h3 className="mt-10 text-xl font-bold text-[#512731]">The Zanmodest Commitment: Your Peace of Mind</h3>
        <p className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef">
          We have meticulously crafted every aspect of our services to ensure your journey is seamless, respectful, and enriching
        </p>
        <ul className="text-[16px] leading-relaxed mt-5 text-[#512731] text-lef flex flex-col gap-3 list-disc md:pl-10">
          <li className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#512731" viewBox="0 0 256 256">
                <path d="M238.25,229A8,8,0,0,1,227,230.25c-.37-.3-38.82-30.25-99-30.25S29.36,230,29,230.26a8,8,0,0,1-10-12.51c1.63-1.3,38.52-30.26,98.29-33.45A119.94,119.94,0,0,1,114,146.37c1.74-21.71,10.92-50.63,43-72.48A64.65,64.65,0,0,0,140.26,72c-19,.62-30.94,11.71-36.5,33.92A8,8,0,0,1,96,112a7.64,7.64,0,0,1-1.94-.24,8,8,0,0,1-5.82-9.7c9.25-36.95,33.11-45.42,51.5-46a81.48,81.48,0,0,1,21.68,2.45c-3.83-6.33-9.43-12.93-17.21-16.25-10-4.24-22.17-2.39-36.31,5.51a8,8,0,0,1-7.8-14c18.74-10.45,35.72-12.54,50.48-6.2,12.49,5.36,20.73,15.78,25.87,25,6.18-9.64,13.88-16.17,22.39-18.94,11.86-3.87,24.64-.72,38,9.37a8,8,0,0,1-9.64,12.76c-8.91-6.73-16.77-9.06-23.35-6.93-7.29,2.35-12.87,10-16.37,16.61A70.46,70.46,0,0,1,208,73.07c14.61,8.35,32,26.05,32,62.94a8,8,0,0,1-16,0c0-23.46-8.07-40-24-49a50.49,50.49,0,0,0-5.75-2.8,55.64,55.64,0,0,1,5.06,33.06,59.41,59.41,0,0,1-8.86,23.41,8,8,0,0,1-13.09-9.2c.74-1.09,16.33-24.38-3.26-49.37-27,15.21-41.89,37.25-44.16,65.59a104.27,104.27,0,0,0,3.83,36.44c62.65,1.81,101.52,32.33,103.2,33.66A8,8,0,0,1,238.25,229ZM24,140a28,28,0,1,1,28,28A28,28,0,0,1,24,140Zm16,0a12,12,0,1,0,12-12A12,12,0,0,0,40,140Z"></path>
              </svg>
            </span>
            <b>Authentic Local Experiences:</b> Discover hidden gems and connect with the deep Islamic roots of the Spice Islands
          </li>
          <li className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#512731" viewBox="0 0 256 256">
                <path d="M224,128a23.84,23.84,0,0,0-8,1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16,41.06,136,33,136,24a8,8,0,0,0-16,0c0,9-12.16,17.06-26.24,26.44C71.07,65.54,40,86.22,40,128v1.38A24,24,0,0,0,8,152v56a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V152A24,24,0,0,0,224,128ZM102.63,63.76c9.67-6.44,19-12.68,25.37-20,6.34,7.35,15.7,13.59,25.37,20,20,13.32,42.48,28.29,46.11,56.24h-143C60.15,92.05,82.6,77.08,102.63,63.76ZM24,152a8,8,0,0,1,16,0v48H24Zm136,0a24,24,0,0,0-24,24v24H120V176a24,24,0,0,0-48,0v24H56V136H200v64H184V176A24,24,0,0,0,160,152Zm72,48H216V152a8,8,0,0,1,16,0Z"></path>
              </svg>
            </span>
            <b> Prayer-Mindful Itineraries:</b> We ensure you never have to choose between an activity and your daily prayers.
          </li>
          <li className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#512731" viewBox="0 0 256 256">
                <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path>
              </svg>
            </span>
            <b>Privacy as a Priority:</b> We specialize in arranging private tours, female-friendly activities, and accommodations that safeguard your family's
            privacy.
          </li>
          <li className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#512731" viewBox="0 0 256 256">
                <path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path>
              </svg>
            </span>
            <b>Certified Halal Cuisine:</b> From local Swahili dishes to international fare, we guarantee every meal meets the highest halal standards
          </li>
          <li className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#512731" viewBox="0 0 256 256">
                <path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path>
              </svg>
            </span>
            <b>Culturally Sensitive Guides:</b> Our team is trained to operate with the utmost ḥayāʾ, ensuring all interactions are respectful and professional.
          </li>
        </ul>
        <div className="py-12 text-center">
          <h3 className="mt-10 text-xl font-bold text-[#512731]">Begin Your Journey with Us</h3>
          <p className="text-[16px] leading-relaxed mt-5 text-[#512731] text-left">
            You shouldn't have to sacrifice your principles to experience the beauty of the world. With Zanmodest, you can have both. Let us guide you on a
            journey that nourishes the soul and creates cherished memories for a lifetime.
          </p>
          <Link
            to="/tour-packages"
            className=" cursor-pointer bg-[#522731] text-white font-medium px-4 py-2.5 mt-8 flex justify-center items-center gap-3 w-fit mx-auto"
          >
            Explore Our Modest Tour Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
