/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { toast } from "react-toastify";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const result = signup(email, password);

    if (!result.success) {
      toast.error(result.message);
      //   alert(result.message);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Account created successfully. Please login.");

    navigate("/login");
  }

  //////////////////////////////////////Old Method for Signup without auth.js

  //   function handleSignup(e) {
  //     e.preventDefault();
  //     const users = JSON.parse(localStorage.getItem("users")) || [];
  //     // check if user already exists
  //     const userExists = users.find((user) => user.email === email);
  //     if (userExists) {
  //       // alert("User already exists. Please login.");
  //       toast.error("User already exists. Please login.");
  //       return;
  //     }

  //     const newUser = {
  //       email,
  //       password,
  //     };

  //     users.push(newUser);

  //     localStorage.setItem("users", JSON.stringify(users));

  //     // alert("Account created successfully. Please login.");
  //     toast.success("Account created successfully. Please login.");

  //     // redirect to login page
  //     // window.location.href = "/login";
  //   }

  return (
    <>
      <PageNav />

      <main className={styles.auth}>
        {/* LEFT BRAND SIDE */}
        <div className={styles.brand}>
          <div className={styles.brandContent}>
            <h1>📝 Todo App</h1>

            <p className={styles.tagline}>Start organizing your tasks today.</p>

            <div className={styles.features}>
              <p>✔ Create and manage todos</p>
              <p>✔ Track your productivity</p>
              <p>✔ Access from any device</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SIDE */}
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <h2 className={styles.title}>Create your account</h2>
            <p className={styles.subtitle}>
              Sign up to start managing your todos
            </p>

            <form className={styles.form} onSubmit={handleSignup}>
              <div className={styles.row}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.row}>
                <label htmlFor="password">Password</label>
                <div className={styles.passwordField}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPassword((s) => !s)}
                    className={styles.eye}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </span>
                </div>
              </div>
              <div className={styles.row}>
                <label>Confirm Password</label>
                <div className={styles.passwordField}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPassword((s) => !s)}
                    className={styles.eye}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </span>
                </div>
              </div>

              <button className={styles.btn}>Create Account</button>

              <p className={styles.switch}>
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
