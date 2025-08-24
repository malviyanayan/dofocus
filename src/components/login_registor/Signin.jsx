import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/signin.css";

export const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  // Regex patterns
  const NAME_PATTERN = /^[A-Za-z]{3,}$/;
  const EMAIL_PATTERN = /^[A-Za-z0-9+_.-]+@(.+)$/;
  const PASSWORD_PATTERN =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form Data:", data);

    // fake API delay
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);

    alert(isRegister ? "Registered successfully!" : "Signed in successfully!");
    reset();
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isRegister ? "Register" : "Sign In"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name only for Register */}
          {isRegister && (
            <>
              <div className="form-group">
                <i className="fa-solid fa-user input-icon"></i>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: NAME_PATTERN,
                      message: "Name must be at least 3 letters",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <p className="error-msg">{errors.name.message}</p>
              )}
            </>
          )}

          {/* Email */}
          <div className="form-group">
            <i className="fa-solid fa-envelope input-icon"></i>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EMAIL_PATTERN,
                  message: "Invalid email format",
                },
              })}
            />
          </div>
          {errors.email && <p className="error-msg">{errors.email.message}</p>}

          {/* Password */}
          <div className="form-group">
            <i className="fa-solid fa-lock input-icon"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: PASSWORD_PATTERN,
                  message:
                    "Password must be 8+ chars, with uppercase, number & symbol",
                },
              })}
            />
            <button
              type="button"
              className="show-pass-btn"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </button>
          </div>
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}

          {/* Submit button */}
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Loading..." : isRegister ? "Register" : "Sign In"}
          </button>
        </form>

        {/* Toggle option */}
        <p className="auth-switch">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsRegister(false)}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsRegister(true)}
              >
                Register
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
