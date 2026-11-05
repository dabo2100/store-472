function LoginHeader() {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 gap-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <span className="font-bold text-xl tracking-wider text-gray-900">
          ELECTRO<span className="text-blue-600">CORE</span>
        </span>
      </div>

      <a
        href="/"
        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
      >
        ← Back to Store
      </a>
    </header>
  );
}

export default LoginHeader;
