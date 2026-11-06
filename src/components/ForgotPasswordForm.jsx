function ForgotPasswordForm({ email, setEmail, forgetPassword }) {
  return (
    <form onSubmit={forgetPassword}>
      <label style={{ fontSize: "12px", fontWeight: "bold" }}>
        EMAIL ADDRESS
      </label>
      <input
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          border: "1px solid #ddd",
          borderRadius: "7px",
          boxSizing: "border-box",
        }}
        type="email"
        placeholder="name@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "13px",
          backgroundColor: "#625ff0",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Send Reset Link →
      </button>
    </form>
  );
}
export default ForgotPasswordForm;
