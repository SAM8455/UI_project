import React from "react";
import bgImg from "../assets/Rectangle1.png";
import trophyIcon from "../assets/shopIcon/trophy.svg";
import WarrantyProtectionIcon from "../assets/shopIcon/guarantee.svg";
import FreeShippingIcon from "../assets/shopIcon/shipping.svg";
import SupportIcon from "../assets/shopIcon/support.svg";

function Cart() {
  return (
    <div className="min-h-screen overflow-auto bg-gray-50">
      <div className="mx-auto container px-4 py-10">
        {/* 1st Section */}
        <div
          className="bg-cover bg-center h-64 container mt-4 relative"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-10"></div>

          {/* Content */}
          <div className="z-10 flex justify-center items-center h-full text-center text-black">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mt-2">Cart</h1>
              <p className="text-sm md:text-sm font-light">Home &gt; Cart</p>
            </div>
          </div>
        </div>

        {/* Cart Table */}
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-4 md:p-8 mt-8">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-beige-200 text-gray-600 uppercase text-sm">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-none">
                  <td className="p-3 flex items-center">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Product"
                      className="w-16 h-16 rounded mr-4"
                    />
                    <span className="text-gray-700 font-medium">
                      Asgaard Sofa
                    </span>
                  </td>
                  <td className="p-3 text-gray-500">Rs. 250,000.00</td>
                  <td className="p-3">
                    <input
                      type="number"
                      className="w-12 border border-gray-300 rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-3 text-gray-700 font-medium">
                    Rs. 250,000.00
                  </td>
                  <td className="p-3 text-center text-yellow-600 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="mt-8 md:flex justify-between items-center bg-beige-100 p-6 rounded-lg">
            <div className="text-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span>Subtotal:</span>
                <span className="font-medium">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold text-yellow-600">
                  Rs. 250,000.00
                </span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-lg font-medium">
              Check Out
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#FAF5EF] py-8 px-4 mt-8">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
            <div className="flex items-center gap-4">
              <img src={trophyIcon} alt="High Quality" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">High Quality</h3>
                <p className="text-gray-600 text-sm">
                  Crafted from top materials
                </p>
              </div>
            </div>
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
    </div>
  );
}

export default Cart;
