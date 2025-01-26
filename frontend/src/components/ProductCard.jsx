

const ProductCard = ({ id, name, image, title, price, onDelete, onUpdate, item }) => {

  
  
  return (

    <div className="relative bg-white border border-gray-300 rounded-md overflow-hidden shadow-md group">
      {/* Product Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-lg">{name}</h2>
        <h3 className="text-gray-600 mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex flex-row justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-yellow-500 text-white py-1 px-4 rounded shadow hover:bg-yellow-600" onClick={onUpdate} >
          Update
        </button>
        <button className="bg-yellow-500 text-white py-1 px-4 rounded shadow hover:bg-yellow-600" onClick={() => onDelete(id)}>
          Delete
        </button>
       
      </div>
    </div>
  );
};

export default ProductCard;
