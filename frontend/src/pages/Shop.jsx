import bgImg from "../assets/Rectangle1.png";
import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopCard from "../components/ShopCard";
import trophyIcon from "../assets/shopIcon/trophy.svg";
import WarrantyProtectionIcon from "../assets/shopIcon/guarantee.svg";
import FreeShippingIcon from "../assets/shopIcon/shipping.svg";
import SupportIcon from "../assets/shopIcon/support.svg";
import PaginationBar from "../components/PaginationBar";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async (page) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/products?page=${page}&limit=16`
      );
      setItems(data.products);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Simulate fetching data
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  const navigate = useNavigate();
  const handleViewProduct = (item) => {
    // Navigate to the single product page with product ID or data
    navigate(`/product/${item.id}`, { state: { item } });
  };

  return (
  
      <div className="mx-auto container px-4 py-10">
        <div
          className="relative bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0  opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex justify-center items-center h-full text-center text-black">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mt-2">Shop</h1>
              <p className="text-sm md:text-sm font-light">Home &gt; Shop</p>
            </div>
          </div>
        </div>

        <div className="w-full h-20 bg-[#FAF4EF] flex items-center px-6 justify-between shadow-md">
          {/* Filter with Icon */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-600 text-lg" />
            <span className="text-gray-700 font-medium">Filter</span>
          </div>

          {/* Showing items info */}
          <div className="text-gray-700">
            Showing items <span className="font-bold">1-{items.length}</span>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              className="bg-white border border-gray-300 rounded px-2 py-1 text-gray-700"
              defaultValue="default"
            >
              <option value="default" disabled>
                Select
              </option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div>
          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-6 p-6">
            {items.map((item) => (
              <ShopCard
                key={item.id}
                image={item.img}
                title={item.title}
                price={item.price}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <PaginationBar
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>

        {/* ---------------------------------------------------------------------------------------------------- */}

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
};

export default Shop;
