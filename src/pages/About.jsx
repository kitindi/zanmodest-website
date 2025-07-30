import Divider from "../components/Divider";

const About = () => {
  return (
    <div className="w-full   ">
      <div className=" relative  w-full h-[30vh] bg-[url(/images/hero-1.jpg)] bg-cover bg-center bg-no-repeat flex flex-row items-center">
        <div className="px-4 md:px-0 w-full max-w-6xl mx-auto z-30 ">
          <h3 className="text-4xl text-white font-bold">Travel with Faith & Tranquility</h3>
          <p className="text-2xl text-white font-bold mt-3">Discover the Soul of Zanzibar, Modestly.</p>
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
      </div>
    </div>
  );
};

export default About;
