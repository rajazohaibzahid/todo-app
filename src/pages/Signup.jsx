/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { toast } from "react-toastify";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const result = signup(email, password);

    if (!result.success) {
      toast.error(result.message);
      //   alert(result.message);
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

      <main className={styles.login}>
        <div className={styles.card}>
          <h2 className={styles.title}>Welcome Back 👋</h2>
          <p className={styles.subtitle}>Login to access your todos</p>

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
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className={styles.btn}>Sign up</button>
          </form>
        </div>
      </main>
    </>
  );
}
