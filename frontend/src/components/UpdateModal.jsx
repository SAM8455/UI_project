import React, { useState } from 'react';

const UpdateModal = ({ item, onClose, onSubmit }) => {
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(updatedItem); // Pass updated data to parent
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Update Item</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={updatedItem.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Title Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={updatedItem.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={updatedItem.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Image Link Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image Link</label>
            <input
              type="url"
              name="img"
              value={updatedItem.img}
              onChange={handleChange}
              placeholder="http://example.com/image.jpg"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={updatedItem.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter a description..."
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-1 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
