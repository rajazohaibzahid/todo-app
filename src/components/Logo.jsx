// /* eslint-disable no-unused-vars */
// import { useNavigate } from "react-router-dom";
// import styles from "./Logo.module.css";

// export default function Logo() {
//   const navigate = useNavigate();
//   function handleLogout() {
//     localStorage.removeItem("currentUser");
//     window.location.href = "/login";
//   }

//   return (
//     <div className={styles.logo}>
//       <button className={styles.backBtn} onClick={handleLogout}>
//         ← Logout
//       </button>
//       👜 Todo App 🌴
//     </div>
//   );
// }

/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCheckCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  return (
    <div className={styles.logo}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faClipboardList} />
        ToDo App
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>

      <button className={styles.backBtn} onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </button>
    </div>
  );
}
