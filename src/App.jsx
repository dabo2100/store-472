import { BrowserRouter, Route, Routes , } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import SignUP from "./pages/Sign-UP";
import VerificationPage from "./pages/verifivationpage";

export default function App() {
  return (
    <div className="w-full h-dvh overflow-auto" data-theme="light">
      <BrowserRouter>
        {/* Any code you write will be fixed in all pages */}
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checout" element={<h1>Checkout Details</h1>} />
          <Route path="/product" element={<h1>Product Details</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={< SignUP/>} />
          <Route path="/orders" element={<h1>Orders Page</h1>} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="*" element={<h1>Page Not Found | 404 Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Home -> shop
// Product Details
// Cart
// About
// Signup
// Login page
// Orders
// profile
// admin - dashboard
// admin - products
//
