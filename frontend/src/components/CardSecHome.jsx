
import twohomePng from "../assets/2-home.png";

const CardSection = () => {
  
    const cards = [
        { id: 1, image: twohomePng, title: "Card 1", subtitle: "Subtitle 1", description: "Description 1" },
        { id: 2, image: twohomePng, title: "Card 2", subtitle: "Subtitle 2", description: "Description 2" },
        { id: 3, image: twohomePng, title: "Card 3", subtitle: "Subtitle 3", description: "Description 3" },
        { id: 4, image: twohomePng, title: "Card 4", subtitle: "Subtitle 4", description: "Description 4" },
        { id: 5, image: twohomePng, title: "Card 5", subtitle: "Subtitle 5", description: "Description 5" },
        { id: 6, image: twohomePng, title: "Card 6", subtitle: "Subtitle 6", description: "Description 6" },
        { id: 7, image: twohomePng, title: "Card 7", subtitle: "Subtitle 7", description: "Description 7" },
        { id: 8, image: twohomePng, title: "Card 8", subtitle: "Subtitle 8", description: "Description 8" },
      ];


  return (
    <div className="bg-white text-black py-10 px-6">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((product) => (
          <div key={product.id} className="bg-white text-black rounded-lg shadow-lg overflow-hidden relative">
            {/* Discount/New Badge */}
            {product.discount && (
              <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm rounded">
                -{product.discount}
              </span>
            )}
            {product.new && (
              <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-sm rounded">
                New
              </span>
            )}

            {/* Product Image */}
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>

              {/* Price Section */}
              <div className="mt-2">
                <span className="text-xl font-bold text-black">{product.price}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-gray-400 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-600 text-black px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default CardSection;
