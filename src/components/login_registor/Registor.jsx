import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div
      className="d-flex justify-content-center no-scrollbar"
      style={{
        height: "85vh",
        width: "100%",
        overflowY: "auto",
        padding: "2rem 1rem",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="d-flex flex-column align-items-center w-100 rounded-3"
        style={{ maxWidth: "500px" }}
      >
        <div className="card p-4 shadow rounded w-100">
          <h2 className="text-center mb-4">Create Account</h2>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                required
              />
              <label htmlFor="username">Username</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
                required
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <p className="mt-4 text-center small">
            <p className="mt-4 text-center small">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </p>
        </div>
        <div style={{ height: "2rem" }}></div> {/* bottom spacing */}
      </div>
    </div>
  );
}
