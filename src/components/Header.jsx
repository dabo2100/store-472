import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/product" },
  { label: "Deals", to: "/orders" },
  { label: "Support", to: "/login" },
];

export default function Header({ cartCount = 2 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-[#7C5CFC]" : "text-gray-500 hover:text-[#7C5CFC]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="shrink-0 text-xl tracking-tight">
          <span className="font-extrabold text-gray-900">ELECTRO</span>
          <span className="font-semibold text-[#7C5CFC]">CORE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-2 hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={linkClass} end>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop search */}
        <div className="mx-auto hidden max-w-md flex-1 lg:block">
          <label className="relative block">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
              strokeWidth={2}
            />
            <input
              type="search"
              placeholder="Search for devices..."
              className="w-full rounded-full border-0 bg-gray-100 py-2.5 pr-4 pl-10 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
            />
          </label>
        </div>

        {/* Spacer on mid screens where search is hidden */}
        <div className="flex-1 lg:hidden" />

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile search toggle */}
          <button
            type="button"
            aria-label="Toggle search"
            onClick={() => setSearchOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Search className="size-5" strokeWidth={2} />
          </button>

          <Link
            to="/login"
            aria-label="Profile"
            className="flex size-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            <User className="size-5" strokeWidth={2} />
          </Link>

          <Link
            to="/cart"
            aria-label={`Cart with ${cartCount} items`}
            className="relative flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-800"
          >
            <ShoppingCart className="size-5" strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-[#7C5CFC] text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? (
              <X className="size-5" strokeWidth={2} />
            ) : (
              <Menu className="size-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet search bar */}
      {searchOpen && (
        <div className="border-t border-sky-100 px-4 py-3 lg:hidden">
          <label className="relative block">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
              strokeWidth={2}
            />
            <input
              type="search"
              placeholder="Search for devices..."
              autoFocus
              className="w-full rounded-full border-0 bg-gray-100 py-2.5 pr-4 pl-10 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
            />
          </label>
        </div>
      )}

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="border-t border-sky-100 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#7C5CFC]/10 text-[#7C5CFC]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#7C5CFC]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
