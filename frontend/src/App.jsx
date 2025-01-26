import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout.jsx";
import About from "./pages/About";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll scrollbar-hidden">
        
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/singleproduct" element={<SingleProduct />} />
              <Route path="/contacts" element={<Contacts />} />

            </Routes>

            <Footer />
          </Router>

      </div>
    </>
  );
}

export default App;
