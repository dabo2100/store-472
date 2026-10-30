import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-gray-950 text-white flex justify-center">
      <div className="container flex justify-between items-center py-4">
        <h1>Out Store</h1>
        <nav className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </div>
  );
}
