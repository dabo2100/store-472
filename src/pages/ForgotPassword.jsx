
import { useState } from "react";
import ForgotPasswordCard from "../components/ForgotPasswordCard";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function forgetPassword(e) {
    e.preventDefault();

    if (email === "") {
      setMessage("Please enter your email");
    } else {
      setMessage("Password reset link sent to your email!");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
        fontFamily: "Arial",
        color: "#172033",
      }}
    >
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "350px" }}>
          <div style={{ textAlign: "center" }}>
            <h1>Forgot Password?</h1>
            <p style={{ color: "#71809a", fontSize: "13px" }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>
          <ForgotPasswordCard
            email={email}
            setEmail={setEmail}
            forgetPassword={forgetPassword}
            message={message}
          />
        </div>
      </main>
    </div>
  );
}
export default ForgotPassword;
