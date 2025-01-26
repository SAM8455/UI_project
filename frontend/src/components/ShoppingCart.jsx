import { useNavigate } from "react-router-dom";


export default function ShoppingCart({ isVisible, setIsVisible }) {



  const navigate = useNavigate()




  return (
    <>
      {/* Overlay to close the cart */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={() => setIsVisible(false)}
        />
      )}

      {/* Shopping Cart Drawer */}
      <div
        className={`fixed top-0 right-0 bg-white shadow-lg z-[9999] transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform w-80 md:w-[400px] overflow-y-auto`}
      >
        <div className="p-4">
          <div className="flex flex-row justify-between items-center">
            {/* Cart Header */}
            <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>

            {/* Close Button */}
            <button
              className="text-gray-500 hover:text-black"
              onClick={() => setIsVisible(false)}
            >
              &times;
            </button>
          </div>

          {/* Example Cart Items */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136_1280.jpg"
                alt="Asgaard Sofa"
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">Asgaard Sofa</p>
                <p className="text-sm text-gray-600">1 x Rs. 250,000</p>
              </div>
              <button className="text-gray-500 hover:text-red-500">
                &times;
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136_1280.jpg"
                alt="Asgaard Sofa"
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">Asgaard Sofa</p>
                <p className="text-sm text-gray-600">1 x Rs. 250,000</p>
              </div>
              <button className="text-gray-500 hover:text-red-500">
                &times;
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136_1280.jpg"
                alt="Asgaard Sofa"
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">Asgaard Sofa</p>
                <p className="text-sm text-gray-600">1 x Rs. 250,000</p>
              </div>
              <button className="text-gray-500 hover:text-red-500">
                &times;
              </button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>Rs. 520,000</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-row justify-between items-center gap-x-4">
            <button className="px-4 py-2 bg-white-800 text-blcak border border-black rounded-2xl flex-1" onClick={() => navigate('/cart')}>
              Cart
            </button>
            <button className="px-4 py-2 bg-white-800 text-black border border-black rounded-2xl flex-1" onClick={() => navigate('/checkout')}>
              Checkout
            </button>
            <button className="px-4 py-2 bg-white-800 text-black border border-black rounded-2xl flex-1" onClick={() => navigate('/comparison')}>
              Comparison
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
