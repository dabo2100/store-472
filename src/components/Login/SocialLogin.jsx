
function SocialLogin() {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="text-xs text-gray-400 font-medium">
          OR CONTINUE WITH
        </span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      
        <button
          type="button"
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
        >
          <span className="font-bold text-xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </span>
        </button>

       
        <button
          type="button"
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black"
            aria-label="Apple"
          >
            <path d="M16.37 1.43c0 1.14-.42 2.2-1.12 3.02-.75.88-1.98 1.56-3.1 1.47-.14-1.1.4-2.27 1.1-3.1.77-.88 2.1-1.53 3.12-1.39ZM20.8 17.05c-.57 1.28-.84 1.85-1.57 2.98-1.02 1.55-2.46 3.48-4.25 3.5-1.6.02-2.02-1.04-4.2-1.03-2.17.01-2.63 1.06-4.23 1.04-1.79-.02-3.15-1.76-4.17-3.3-2.85-4.32-3.15-9.4-1.39-12.1 1.25-1.92 3.23-3.04 5.02-3.04 1.82 0 2.97 1.05 4.48 1.05 1.46 0 2.35-1.05 4.45-1.05 1.58 0 3.25.86 4.5 2.35-3.95 2.17-3.31 7.81 1.36 9.6Z" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">
            Apple
          </span>
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;

