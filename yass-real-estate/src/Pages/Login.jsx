import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="login-container">

        <div className="login-box">

          <h2>Admin Login</h2>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
          </button>

        </div>

      </div>
    </>
  );
}

export default Login;