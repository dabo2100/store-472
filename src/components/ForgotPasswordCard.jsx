import ForgotPasswordForm from "./ForgotPasswordForm";
function ForgotPasswordCard({ email, setEmail, forgetPassword, message }) {
  const card = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    border: "1px solid #eee",
    boxShadow: "0 2px 10px #ddd",
  };
  return (
    <div style={card}>
      <ForgotPasswordForm
        email={email}
        setEmail={setEmail}
        forgetPassword={forgetPassword}
      />

      {message !== "" && (
        <p
          style={{
            color: "#625ff0",
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            color: "#625ff0",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          ← Back to Sign In
        </button>
      </div>
    </div>
  );
}
export default ForgotPasswordCard;
