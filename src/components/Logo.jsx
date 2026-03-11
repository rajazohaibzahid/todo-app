import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className={styles.logo}>
      <button className={styles.backBtn} onClick={() => navigate("/")}>
        ← Back
      </button>
      👜 Todo App 🌴
    </div>
  );
}
