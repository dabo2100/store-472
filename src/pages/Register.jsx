import { FiUser, FiMail, FiLock, FiEye, FiUserPlus } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create Account</h2>
        <p>Join ELECTROCORE for exclusive deals and faster checkout.</p>

        <div className="register-card">
          <form className="register-form">
            <label>FULL NAME</label>
            <div className="input-box">
              <FiUser />
              <input type="text" placeholder="John Doe" />
            </div>

            <label>EMAIL ADDRESS</label>
            <div className="input-box">
              <FiMail />
              <input type="email" placeholder="name@company.com" />
            </div>

            <label>PASSWORD</label>
            <div className="input-box">
              <FiLock />
              <input type="password" placeholder="••••••••" />
              <button type="button" className="eye-btn">
                <FiEye />
              </button>
            </div>

            <label>CONFIRM PASSWORD</label>
            <div className="input-box">
              <FiLock />
              <input type="password" placeholder="••••••••" />
              <button type="button" className="eye-btn">
                <FiEye />
              </button>
            </div>

            <div className="terms">
              <input type="checkbox" />
              <span>
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </div>

            <button className="create-btn" type="submit">
              Create Account <FiUserPlus />
            </button>
          </form>

          <div className="register-divider">
            <span></span>
            OR SIGN UP WITH
            <span></span>
          </div>

          <div className="social-buttons">
            <button type="button">
              <FcGoogle /> Google
            </button>
            <button type="button">
              <FaApple /> Apple
            </button>
          </div>
        </div>

        <div className="signin">
          Already have an account? <a href="/login">Sign in here</a>
        </div>
      </div>
    </div>
  );
}

export default Register;