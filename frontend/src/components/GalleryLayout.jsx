// import one from "../assets/homefour/Rectangle 36.png"
// import two from "../assets/homefour/Rectangle 36.png"
// import three from "../assets/homefour/Rectangle 36.png"
// import four from "../assets/homefour/Rectangle 36.png"
// import five from "../assets/homefour/Rectangle 36.png"
// import six from "../assets/homefour/Rectangle 36.png"
// import seven from "../assets/homefour/Rectangle 36.png"
// import eight from "../assets/homefour/Rectangle 36.png"

const GalleryLayout = () => {
  const images = [
    // one, // Replace with your images
    // two,
    // three,
    // four,
    // five,
    // six,
    // seven,
    // eight,
  ];

  return (
    <div className="bg-white text-black py-10 px-6">
      {/* Header Section */}
      <h2 className="text-center text-3xl font-bold mb-8">
        Share your setup with <br /><span className="text-yellow-500">#FuniroFurniture</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            alt="Furniture 1"
            className="w-full h-full object-cover "
          />
        </div>
        <div>
          <img
            src={images[1]}
            alt="Furniture 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={images[2]}
            alt="Furniture 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={images[3]}
            alt="Furniture 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <img
            src={images[4]}
            alt="Furniture 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={images[5]}
            alt="Furniture 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={images[6]}
            alt="Furniture 7"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={images[7]}
            alt="Furniture 8"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryLayout;
