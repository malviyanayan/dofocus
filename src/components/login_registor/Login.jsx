import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center"
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
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" required />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="off" required />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="mt-4 text-center small">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>

        <div style={{ height: "2rem" }}></div> {/* bottom margin space */}
      </div>
    </div>
  );
}
