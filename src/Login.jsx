import LoginFooter from "./components/login/LoginFooter";
import LoginForm from "./components/login/LoginForm";
import LoginHeader from "./components/login/LoginHeader";
import SocialLogin from "./components/login/SocialLogin";


function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LoginHeader />

      <main className="flex-1 flex justify-center items-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <LoginForm />
          <SocialLogin />
          <LoginFooter />
        </div>
      </main>
    </div>
  );
}

export default Login;
