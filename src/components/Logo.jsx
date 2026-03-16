/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  return (
    <div className={styles.logo}>
      <button className={styles.backBtn} onClick={handleLogout}>
        ← Logout
      </button>
      👜 Todo App 🌴
    </div>
  );
}
