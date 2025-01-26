import bgImg from "../assets/Rectangle1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import PaginationBar from "../components/PaginationBar";
import ProductCard from "../components/ProductCard";
import UpdateModal from "../components/UpdateModal";

function Products() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [editingItem, setEditingItem] = useState(null); // Item being edited
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false); // Add product modal visibility

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

  // Delete item function
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/data/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Update UI by filtering out the deleted item
          setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  // Open Update Modal
  const handleUpdateClick = (item) => {
    setEditingItem(item); // Set the item to edit
    setIsModalOpen(true); // Open modal
  };

  // Update Item Function
  const handleUpdateSubmit = (updatedItem) => {
    fetch(`http://localhost:8080/data/${updatedItem.id}`, {
      method: "PUT", // PUT for updates
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (response.ok) {
          setItems((prevItems) =>
            prevItems.map((item) =>
              item.id === updatedItem.id ? updatedItem : item
            )
          ); // Update UI
          setIsModalOpen(false); // Close modal
        }
      })
      .catch((err) => console.error(err));
  };

  // Add Product Modal
  const handleAddProductModalOpen = () => {
    setIsAddProductModalOpen(true); // Open add product modal
  };

  // Function to handle adding a product
  const handleAddProduct = (newProduct) => {
    fetch("http://localhost:8080/additem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (response.ok) {
          setItems((prevItems) => [...prevItems, newProduct]); // Add to the UI immediately
          setIsAddProductModalOpen(false); // Close modal
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mx-auto container px-4 py-10">
      {/* 1st-------------------------------------------------------------- */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  opacity-50"></div>

        {/* Content */}
        <div className="z-10 flex justify-center items-center h-full text-center text-black">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mt-2">Products</h1>
            <p className="text-sm md:text-sm font-light">Home &gt; Products</p>
          </div>
        </div>
      </div>

      {/* 2nd---------------------------------------------------------------------- */}

      <div className="w-full h-20 bg-[#FAF4EF] flex flex-1 items-center px-6 justify-center shadow-md">
        <button
          className="bg-yellow-500 text-black py-3 px-8 rounded shadow hover:bg-yellow-600"
          onClick={handleAddProductModalOpen}
        >
          Add Product
        </button>
      </div>

      {/* 3rd------------------------------------------------------------------- */}
      <div>
        {/* Products Grid */}
        <div className="grid grid-cols-4 gap-6 p-6">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              image={item.img}
              title={item.title}
              price={item.price}
              onDelete={handleDelete}
              onUpdate={() => handleUpdateClick(item)}
              id={item.id}
              item={item}
              // onAddToCart={() => handleClick(item)}
            />
          ))}
        </div>
      </div>

          {/* Update Modal */}
        {isModalOpen && editingItem && (
          <UpdateModal
            item={editingItem}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleUpdateSubmit}
          />
        )}

        {/* Add Product Modal */}
        {isAddProductModalOpen && (
          <UpdateModal
            onClose={() => setIsAddProductModalOpen(false)}
            onSubmit={handleAddProduct}
          />
        )}

      <div className="mt-6">
        <PaginationBar
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Products;
