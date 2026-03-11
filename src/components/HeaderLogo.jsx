import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.css";

function HeaderLogo() {
  return (
    <Link to="/">
      <img
        src="/dimarketo.png"
        alt="Dimarketo logo"
        className={styles.headerLogo}
      />
    </Link>
  );
}

export default HeaderLogo;
