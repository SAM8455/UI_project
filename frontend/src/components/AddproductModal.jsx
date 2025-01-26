import React, { useState } from 'react';

const AddProductModal = ({ onClose, onAdd }) => {
  // State for form fields
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [averageRating, setAverageRating] = useState('');
  const [totalReviews, setTotalReviews] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new product object
    const newProduct = {
      name,
      title,
      price,
      img,
      description,
      size,
      color,
      reviews: {
        average_rating: parseFloat(averageRating) || 0,
        total_reviews: parseInt(totalReviews) || 0,
      },
    };

    // Send the new product to the backend
    fetch('http://localhost:8080/additem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Data saved successfully!') {
          onAdd(newProduct);
          onClose();
        }
      })
      .catch((err) => console.error('Error adding product:', err));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              className="w-full p-2 border rounded-md"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Average Rating</label>
            <input
              type="number"
              step="0.1"
              className="w-full p-2 border rounded-md"
              value={averageRating}
              onChange={(e) => setAverageRating(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Reviews</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={totalReviews}
              onChange={(e) => setTotalReviews(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
