import bgImg from "../assets/Rectangle1.png";
import trophyIcon from "../assets/shopIcon/trophy.svg";
import WarrantyProtectionIcon from "../assets/shopIcon/guarantee.svg";
import FreeShippingIcon from "../assets/shopIcon/shipping.svg";
import SupportIcon from "../assets/shopIcon/support.svg";

function Contacts() {
  return (
    // first--------------------------------------------------------------
    <div className="container mx-auto px-4 py-8">
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center items-center h-full text-center text-black">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mt-2">Contacts</h1>
            <p className="text-sm md:text-sm font-light">Home &gt; contacts</p>
          </div>
        </div>
      </div>

      {/* 2nd------------------------------------------------------------------ */}

      <div className="flex flex-col px-6 lg:px-20 py-10 gap-10">
        {/* Title and Description */}
        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="mt-4 text-gray-600">
            For more information about our product & services, please feel free
            to drop us an email.
            <br />
            Our staff is always here to help you out. Do not hesitate!
          </p>
        </div>

        {/* Content Section: Contact Info + Form */}
        <div className="flex flex-col mt-4 lg:flex-row gap-10">
          {/* Contact Info Section */}
          <div className="flex flex-col gap-8 lg:w-1/2">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="text-xl text-yellow-500">📍</span>
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-xl text-yellow-500">📞</span>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <span className="text-xl text-yellow-500">⏰</span>
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2">
            <form className="flex flex-col gap-6 bg-white p-6 shadow-md rounded-lg">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Hi! I'd like to ask about"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3rd------------------------------------------------------------------------- */}
      <div className="bg-[#FAF5EF] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <img src={trophyIcon} alt="High Quality" className="h-10 w-10" />
            <div>
              <h3 className="font-bold text-lg">High Quality</h3>
              <p className="text-gray-600 text-sm">
                Crafted from top materials
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <img
              src={WarrantyProtectionIcon}
              alt="Warranty Protection"
              className="h-10 w-10"
            />
            <div>
              <h3 className="font-bold text-lg">Warranty Protection</h3>
              <p className="text-gray-600 text-sm">Over 2 years</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <img
              src={FreeShippingIcon}
              alt="Free Shipping"
              className="h-10 w-10"
            />
            <div>
              <h3 className="font-bold text-lg">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Order over $150</p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex items-center gap-4">
            <img src={SupportIcon} alt="24/7 Support" className="h-10 w-10" />
            <div>
              <h3 className="font-bold text-lg">24 / 7 Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
