import { useState } from "react";


const SingleProductPage = () => {


  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: "Reviews [5]" },
  ];
  

  return (
    <div className="mt-20">

      {/* 2nd----------------------------------------------------------------------- */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 bg-[#fdf7f0] min-h-screen">
      {/* Image Gallery */}
      <div className="flex flex-col gap-4">
        <div className="rounded-xl overflow-hidden border border-gray-200 max-w-lg">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg"
            alt="Main product"
            className="w-100 h-80"
          />
        </div>
        <div className="flex gap-4">
          {Array(4)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1">
        <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
        <p className="text-xl font-semibold text-gray-700 mt-2">
          Rs. 250,000.00
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
            <span className="text-gray-400 text-xl">☆</span>
          </div>
          <p className="text-gray-600">(5 Customer Reviews)</p>
        </div>
        <p className="text-gray-600 mt-4">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size Options */}
        <div className="mt-6">
          <h4 className="font-medium text-lg">Size</h4>
          <div className="flex gap-4 mt-2">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-indigo-300"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="mt-6">
          <h4 className="font-medium text-lg">Color</h4>
          <div className="flex gap-4 mt-2">
            {["bg-purple-500", "bg-black", "bg-yellow-500"].map((color, idx) => (
              <button
                key={idx}
                className={`w-8 h-8 rounded-full border border-gray-300 ${color}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="px-4 py-2">-</button>
            <span className="px-4">1</span>
            <button className="px-4 py-2">+</button>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            + Compare
          </button>
        </div>

        {/* SKU and Share */}
        <div className="mt-6 text-gray-600">
          <p>SKU: SS001</p>
          <p>Category: Sofas</p>
          <p>Tags: Sofa, Chair, Home, Shop</p>
        </div>
        <div className="mt-6 flex gap-4">
          {["facebook", "linkedin", "twitter"].map((platform) => (
            <button
              key={platform}
              className="text-indigo-600 hover:text-indigo-800"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* 3rd------------------------------------------------------------------------------ */}
    <div className="p-6 bg-[#fdf7f0] min-h-screen">
      {/* Tabs */}
      <div className="flex justify-center gap-8 border-b border-gray-300 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-lg font-medium ${
              activeTab === tab.id
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div>
            <p className="text-gray-600 leading-relaxed">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and
              pronounced. The analogue knobs allow you to fine-tune the controls
              to your personal preferences while the guitar-influenced leather
              strap enables easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === "additional" && (
          <p className="text-gray-600">Additional information goes here.</p>
        )}
        {activeTab === "reviews" && (
          <p className="text-gray-600">Customer reviews will be displayed here.</p>
        )}
      </div>

      {/* Image Gallery */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" overflow-hidden border border-gray-200 max-w-lg mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg"
            alt="Sofa image 1"
            className="w-full h-auto"
          />
        </div>
        <div className="overflow-hidden border border-gray-200 max-w-lg mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg"
            alt="Sofa image 2"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>

    </div>
  );
};

export default SingleProductPage;

