import ShareIcon from "../assets/share.svg";
import compareIcon from "../assets/compare.svg";
import heartIcon from "../assets/Heart1.svg";
import { useNavigate } from "react-router-dom";

const ShopCard = ({ item }) => {

  const navigate = useNavigate()
  
  
  return (

    <div className="relative bg-white border border-gray-300 rounded-md overflow-hidden shadow-md group">
      {/* Product Image */}
      <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />

      

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-lg">{item.title}</h2>
        <p className="text-gray-600 mt-2">{item.price}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-yellow-500 text-white py-1 px-4 rounded shadow hover:bg-yellow-600" onClick={() => navigate("/singleproduct")}>
          Add to Cart
        </button>
        <div className="flex gap-4 text-white">
          <button className="hover:text-yellow-500 flex flex-row items-center">
            <img src={ShareIcon} alt="Share" className="h-5 w-5" />
            <span className="text-lg">Share</span>
          </button>
          <button className="hover:text-yellow-500 flex flex-row items-center">
            <img src={compareIcon} alt="Share" className="h-5 w-5" />
            <span className="text-lg">Compare</span>
          </button>
          <button className="hover:text-yellow-500 flex flex-row items-center">
            <img src={heartIcon} alt="Share" className="h-5 w-5" />
            <span className="text-lg">Like</span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
