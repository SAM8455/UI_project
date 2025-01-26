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
            <h1 className="text-2xl md:text-4xl font-bold mt-2">Checkout</h1>
            <p className="text-sm md:text-sm font-light">Home &gt; Checkout</p>
          </div>
        </div>
      </div>

      {/* 2nd------------------------------------------------------------------ */}
      <div className="grid mt-6 grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Billing Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Country / Region
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500">
                <option>Sri Lanka</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Street Address
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500"
                placeholder="Street Address"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Town / City
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Province
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500">
                  <option>Western Province</option>
                  <option>Central Province</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="border border-gray-300 rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-medium mb-2">Payment Methods</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Direct Bank Transfer</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Cash On Delivery</span>
              </label>
            </div>
          </div>
          <button className="w-60 justify-center bg-yellow-600 text-white py-2 rounded-lg mt-6 hover:bg-yellow-700 transition">
            Place Order
          </button>
        </div>
      </div>

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
