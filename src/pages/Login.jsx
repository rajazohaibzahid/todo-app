/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const result = login(email, password);

    if (!result.success) {
      toast.error(result.message);
      return;
    }
    toast.success("Login successful");
    navigate("/app");
  }

  ///////////////////////////////////////////Old Method for Signup without auth.js

  // function handleLogin(e) {
  //   e.preventDefault();

  //   const users = JSON.parse(localStorage.getItem("users")) || [];

  //   const user = users.find(
  //     (u) => u.email === email && u.password === password,
  //   );

  //   if (!user) {
  //     // alert("Invalid email or password");
  //     toast.error("Invalid email or password");
  //     return;
  //   }

  //   // save logged in user
  //   localStorage.setItem("currentUser", email);

  //   // alert("Login successful");
  //   toast.success("Login successful");

  //   // redirect to app
  //   window.location.href = "/app";
  // }

  return (
    <>
      <PageNav />

      <main className={styles.auth}>
        {/* LEFT SIDE */}
        <div className={styles.brand}>
          <div className={styles.brandContent}>
            <h1>📝 Todo App</h1>

            <p className={styles.tagline}>
              Organize your work and life effortlessly.
            </p>

            <div className={styles.features}>
              <p>✔ Manage your daily tasks</p>
              <p>✔ Track completed todos</p>
              <p>✔ Access your list anywhere</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <h2 className={styles.title}>Hi There👋!</h2>
            <p className={styles.subtitle}>
              Login to continue managing your todos
            </p>

            <form className={styles.form} onSubmit={handleLogin}>
              <div className={styles.row}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.row}>
                <label>Password</label>

                <div className={styles.passwordField}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              <button className={styles.btn}>Login</button>

              <p className={styles.switch}>
                Don’t have an account? <a href="/signup">Create one</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

///////////////////////////////Old Signup UI
//     <>
//       <PageNav />

//       <main className={styles.login}>
//         <div className={styles.card}>
//           <h2 className={styles.title}>Hi there 👋</h2>
//           <p className={styles.subtitle}>Please login to access your todos</p>

//           <form className={styles.form} onSubmit={handleLogin}>
//             <div className={styles.row}>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="example@email.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className={styles.row}>
//               <label htmlFor="password">Password</label>
//               <div className={styles.passwordField}>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span
//                   className={styles.toggle}
//                   onClick={() => setShowPassword((s) => !s)}
//                 >
//                   {showPassword ? "🫣" : "👁"}
//                 </span>
//               </div>
//             </div>

//             <button className={styles.btn}>Login</button>
//           </form>

//           <p className={styles.signupText}>
//             Don’t have an account? <a href="/signup">Create account</a>
//           </p>
//         </div>
//       </main>
//     </>
//   );
// }
