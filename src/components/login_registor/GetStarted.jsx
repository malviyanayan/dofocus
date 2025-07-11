import React, { useState } from "react";
import "./GetStarted.css"; // CSS is below this JSX

const GetStarted = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});


  

  const toggleModal = () => {
    setShowModal(!showModal);
    setIsSignUp(false);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (isSignUp && !formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    if (isSignUp) {
        console.log("name : " + formData.name + "email : " + formData.email + ", Password : " + formData.password);
    } else {
        console.log("email : " + formData.email + ", Password : " + formData.password);
    }
    toggleModal();
  };

  const togglePassword = () => {
    const input = document.getElementById("passwordField");
    input.type = input.type === "password" ? "text" : "password";
  };

  return (
    <>
      <a onClick={toggleModal} className="btn btn-danger fw-medium rounded-4 px-2" role="button">
        Login/Register
      </a>

      {showModal && (
        <div className="auth-overlay" onClick={toggleModal}>
          <div className="auth-box" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-center mb-3">{isSignUp ? "Sign Up" : "Sign In"}</h4>

            {isSignUp && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error-msg">{errors.name}</div>}
              </div>
            )}

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-msg">{errors.email}</div>}
            </div>

            <div className="mb-3 password-wrapper">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="passwordField"
                value={formData.password}
                onChange={handleChange}
              />
              <i
                className="fa-solid fa-eye toggle-password"
                onClick={togglePassword}
              ></i>
              {errors.password && <div className="error-msg">{errors.password}</div>}
            </div>

            <button className="btn btn-primary w-100 mb-2" onClick={handleSubmit}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <p className="text-center mt-3">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span className="toggle-link" onClick={toggleForm}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStarted;
