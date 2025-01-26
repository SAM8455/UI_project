import onehomePng from "../assets/1-home.png";
import twohomePng from "../assets/2-home.png";
import threehomePng from "../assets/3-home.png";
import fourhomePng from "../assets/4-home.png";
import CardSection from "../components/CardSecHome";
import GalleryLayout from "../components/GalleryLayout";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleViewProduct = () => {
    navigate(`/shop`);
  };

  return (
    <>
      <div className="m-auto container">
        <div className="h-screen overflow-y-scroll md:scrollbar-hidden">


          {/* // first part ---------------------------------------------------------- */}
          <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden">
            {/* Background Image */}
            <img
              src={onehomePng}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-left bg-amber-100 bg-opacity-80 px-6 py-4 rounded-lg shadow-lg">
              <h3>New Arrival</h3>
              <h1 className="text-2xl font-bold text-yellow-600 mb-4">
                Discover our New Collection
              </h1>
              <p className="text-gray-600 mb-4">
                Discover amazing features and products designed just for you.
              </p>
              <div className="flex justify-start">
                <button
                  className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-900 transition"
                  onClick={handleViewProduct}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>


          {/* // 2nd part ------------------------------------------------------- */}
          <div>
            {/* New Section: Less Text with 3 Vertical Images */}
            <div className="max-w-5xl mx-auto px-4 py-20">
              {/* Introductory Text */}
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold">Browse the Range</h1>
                <p className="text-gray-600 py-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  harum inventore, iusto eos culpa ab obcaecati deserunt cumque
                  dolor voluptatum.
                </p>
              </div>

              {/* 3 Vertical Images with Names */}
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:space-x-4">
                {/* Image 1 */}
                <div className="flex flex-col items-center">
                  <img
                    src={twohomePng}
                    alt="Item 1"
                    className="w-60 h-70 object-cover rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-800 font-medium">Dining</p>
                </div>

                {/* Image 2 */}
                <div className="flex flex-col items-center">
                  <img
                    src={threehomePng}
                    alt="Item 2"
                    className="w-60 h-70 object-cover rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-800 font-medium">Living</p>
                </div>

                {/* Image 3 */}
                <div className="flex flex-col items-center">
                  <img
                    src={fourhomePng}
                    alt="Item 3"
                    className="w-60 h-70 object-cover rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-800 font-medium">Bedroom</p>
                </div>
              </div>
            </div>
          </div>



          {/* 3rd part--------------------------------------------------------------------- */}
          <div>
            <CardSection />
          </div>
          <div>
            <GalleryLayout />
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Home;
