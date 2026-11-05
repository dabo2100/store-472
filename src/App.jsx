import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Productpage";
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
            <Route path="/home" element={<h1>HomePage</h1>} />
            <Route path="/cart" element={<h1>Cart Page</h1>} />
            <Route path="/product" element={<ProductPage />} />
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