import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6">
      {/* Upper Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
        {/* Address Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>123 Furniture Street</p>
          <p>Cityville, State, 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: support@example.com</p>
        </div>

        {/* Links Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Help</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-yellow-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="mb-4">Get the latest updates and offers.</p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Lower Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
