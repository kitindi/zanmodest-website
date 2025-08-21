import { useState } from "react";
import Divider from "../components/Divider";
import { Link } from "react-router";

const Contact = () => {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("https://zanmodest.co.tz/sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      const result = await response.json();
      if (result.status === "success") {
        setStatus("Message sent successfully!");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus("Error sending message. Try again.");
    }
  };
  return (
    <div className="w-full ">
      <div className="px-4 md:px-0 w-full max-w-5xl mx-auto py-5">
        <div className="w-full flex items-center justify-center gap-3">
          <Link to="/" className="text-md font-medium text-gray-400">
            Khami & Sons Tours and Safari
          </Link>{" "}
          <p className="text-md font-medium text-[#512731]">Our Contacts</p>
        </div>
        <div className="w-full">
          <p className="text-4xl font-bold text-[#512731] my-10 text-center">Zanmodest Travel Contacts</p>
          <p className=" text-[16px] leading-relaxed mt-5 text-[#512731] text-lef">
            Based in the heart of Kianga, Zanzibar, Zanmodest, a modest-friendly tourism brand by Khami & Sons, is your trusted partner for unforgettable
            cultural tours and eco-conscious safaris. Our dedicated team, led by local experts with over a decade of experience, crafts personalized journeys
            that blend Swahili heritage with Islamic values.
          </p>
          <p className="text-[16px] leading-relaxed mt-3 text-[#512731] text-lef">
            Travel with Zanmodest and enjoy transparent pricing, authentic experiences guided by Zanzibar’s finest, and a commitment to sustainable tourism.
            Connect with us to plan your dream adventure today!
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 md:grid flex flex-col gap-8 md:grid-cols-5 flex flex-col gap-8 md:gap-5 mt-12 py-5 ">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold text-[#512731] text-left">Reach Out to Us</h3>
            <p className="text-[16px] leading-relaxed pt-8 text-[#512731]">
              Got a question, idea, or want to plan your Zanzibar adventure? We’re excited to connect with you! Fill out the form below, call us, or reach out
              via WhatsApp to start your modest-friendly journey
            </p>
            <ul className="mt-10 flex flex-col gap-5">
              <li>
                {" "}
                <span className="flex items-center gap-3 text-md text-[#512731] font-medium">
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
              </li>
              <li>
                <span className="flex items-center gap-3 text-md text-[#512731] font-medium">
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
              </li>
              <li>
                <span className="flex items-center gap-3 text-md text-[#512731] font-medium">
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
                  +255 656 839 500 / +255 773 599 059
                </span>
              </li>
              <li>
                <span className="flex items-center gap-3 text-md text-[#512731] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                    <path d="M185.79,148.42l-32-16a4,4,0,0,0-4,.25l-16.64,11.1a44.56,44.56,0,0,1-20.91-20.91l11.1-16.64a4,4,0,0,0,.25-4l-16-32A4,4,0,0,0,104,68a36,36,0,0,0-36,36,84.09,84.09,0,0,0,84,84,36,36,0,0,0,36-36A4,4,0,0,0,185.79,148.42ZM152,180a76.08,76.08,0,0,1-76-76,28,28,0,0,1,25.58-27.9l13.8,27.61-11,16.54A4,4,0,0,0,104,124a52.43,52.43,0,0,0,28,28,4,4,0,0,0,3.76-.37l16.54-11,27.61,13.8A28,28,0,0,1,152,180ZM128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"></path>
                  </svg>
                  +971 50438 5270
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-3 md:pl-16">
            {/* inquire form */}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="col-span-1 w-full">
                  <label htmlFor="" className="text-md font-semibold text-[#512731]">
                    Your first name*
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    className="w-full border rounded-md mt-2 px-3 py-2 outline-none"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="" className="text-md font-semibold text-[#512731]">
                    Your first name*
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    name="lastname"
                    className="w-full border rounded-md mt-2 px-3 py-2 outline-none"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 mt-2">
                <div className="col-span-2 w-full py-2">
                  <label htmlFor="" className="text-md font-semibold text-[#512731]">
                    Your E-Mail*
                  </label>
                  <input
                    type="text"
                    placeholder="E-Mail"
                    name="email"
                    className="w-full border rounded-md mt-2 px-3 py-2 outline-none"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 mt-2">
                <div className="col-span-2 w-full py-2">
                  <label htmlFor="" className="text-md font-semibold text-[#512731]">
                    Your phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone (International format)"
                    className="w-full border rounded-md mt-2 px-3 py-2 outline-none"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 mt-2">
                <div className="col-span-2 w-full py-2">
                  <label htmlFor="" className="text-md font-semibold text-[#512731]">
                    How can we help you?*
                  </label>
                  <textarea
                    name="message"
                    id=""
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full border border-gray-500 rounded-md outline-none px-3 py-2 mt-2"
                    placeholder="Please let us know if you have any question"
                  ></textarea>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center mt-2">
                <button className="w-full block text-lg font-semibold px-20 py-2 rounded-md bg-amber-950 text-white border-none cursor-pointer">SEND</button>
                {status && <p className="mt-3 text-sm text-red-500">{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Contact;
