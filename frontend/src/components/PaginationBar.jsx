import  { useState } from 'react';


const PaginationBar = ({ totalPages = 3, currentPage = 1, onPageChange }) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page) => {
    setActivePage(page);
    if (onPageChange) onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 border rounded-md ${
            activePage === i
              ? 'bg-yellow-600 text-white border-yellow-500'
              : 'bg-yellow-100 text-gray-700 border-yellow-00 hover:bg-yellow-100'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
        className={`px-4 py-2 border rounded-md ${
          activePage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-yellow-100 text-gray-700 border-yellow-00 hover:bg-yellow-100'
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">{renderPageNumbers()}</div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
        className={`px-4 py-2 border rounded-md ${
          activePage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-yellow-100 text-gray-700 border-yellow-00 hover:bg-yellow-100'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBar;
