import { useState } from "react";
import logoSVG from "../assets/logo.svg";
import userSVG from "../assets/account-alert.svg";
import heartSVG from "../assets/heart.svg";
import searchSVG from "../assets/search.svg";
import shopSVG from "../assets/shopcart.svg";
import ShoppingCart from "./ShoppingCart.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="flex justify-center items-center">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src={logoSVG} alt="" className="ml-12" />
                <span className="font-semibold text-gray-500 text-lg ml-2 mr-8">
                  Furoniro
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <a
              href="/"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="/shop"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Shop
            </a>
            <a
              href="/products"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Products
            </a>
            <a
              href="/about"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="/contacts"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Contacts
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={userSVG} alt="" />
            </a>

            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={searchSVG} alt="" />
            </a>

            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={heartSVG} alt="" />
            </a>

            <a
              href="#"
              className="py-2 px-2 mr-8 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={shopSVG} alt="" onClick={() => setIsCartVisible(!isCartVisible)} />
              
                
              
            </a>
            <ShoppingCart isVisible={isCartVisible} setIsVisible={setIsCartVisible}/>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 flex-1 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="">
          <li>
            <a
              href="/"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contacts"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Contacts
            </a>
          </li>
          <li className="flex justify-around py-4">
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={userSVG} alt="" />
            </a>

            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={searchSVG} alt="" />
            </a>

            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={heartSVG} alt="" />
            </a>

            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <img src={shopSVG} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
