
function LoginFooter() {
  return (
    <div className="w-full max-w-md mx-auto mt-8 text-center">
      <p className="text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline"
        >
          Create an account
        </a>
      </p>

      <div className="mt-10 border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-400">
          © 2025 ELECTROCORE. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginFooter;
