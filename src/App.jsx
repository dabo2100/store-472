import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import SignUP from "./pages/Sign-UP";
import VerificationPage from "./pages/verificationpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="flex min-h-dvh w-full flex-col overflow-auto" data-theme="light">
      <BrowserRouter>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checout" element={<h1>Checkout Details</h1>} />
            <Route path="/product" element={<h1>Product Details</h1>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/orders" element={<h1>Orders Page</h1>} />
            <Route path="*" element={<h1>Page Not Found | 404 Error</h1>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}