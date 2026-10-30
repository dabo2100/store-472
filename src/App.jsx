import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-dvh w-full flex-col overflow-auto" data-theme="light">
      <BrowserRouter>
        {/* Any code you write will be fixed in all pages */}
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checout" element={<h1>Checkout Details</h1>} />
            <Route path="/product" element={<h1>Product Details</h1>} />
            <Route path="/cart" element={<h1>Cart Page</h1>} />
            <Route path="/login" element={<h1>Login Page</h1>} />
            <Route path="/signup" element={<h1>Sign-Up Page</h1>} />
            <Route path="/orders" element={<h1>Orders Page</h1>} />
            <Route path="*" element={<h1>Page Not Found | 404 Error</h1>} />
          </Routes>
        </main>
        <Footer />
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
