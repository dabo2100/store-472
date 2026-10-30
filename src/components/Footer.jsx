import { Link } from "react-router-dom";

const companyLinks = [
  { label: "About Us", to: "/" },
  { label: "Sustainability", to: "/" },
  { label: "Privacy Policy", to: "/" },
  { label: "Terms of Service", to: "/" },
];

const customerLinks = [
  { label: "Help Center", to: "/" },
  { label: "Order Tracking", to: "/orders" },
  { label: "Returns & Refunds", to: "/" },
  { label: "Contact Us", to: "/login" },
];

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "Twitter", icon: TwitterIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-sky-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="text-xl tracking-tight">
              <span className="font-extrabold text-gray-900">ELECTRO</span>
              <span className="font-semibold text-[#7C5CFC]">CORE</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your ultimate destination for high-end electronics. We provide
              original products with official warranty.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#7C5CFC] hover:text-[#7C5CFC]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 transition hover:text-[#7C5CFC]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Customer Care
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {customerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 transition hover:text-[#7C5CFC]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Subscribe to get notified about product launches and sales.
            </p>
            <form
              className="mt-4 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border-0 bg-gray-100 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#7C5CFC] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6B4BE8]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 ELECTROCORE Store. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Visa */}
            <span className="text-sm font-bold tracking-wider text-[#1A1F71]">
              VISA
            </span>

            {/* Mastercard */}
            <span className="relative flex h-5 w-8 items-center" aria-label="Mastercard">
              <span className="absolute left-0 size-5 rounded-full bg-[#EB001B]/90" />
              <span className="absolute left-3 size-5 rounded-full bg-[#F79E1B]/90" />
            </span>

            {/* PayPal */}
            <span className="text-sm font-bold italic tracking-tight">
              <span className="text-[#003087]">Pay</span>
              <span className="text-[#009CDE]">Pal</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
