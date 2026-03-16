/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import HeaderLogo from "./HeaderLogo";

function PageNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <HeaderLogo />

        {/* Mobile Button */}
        <div className={styles.menuBtn} onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Navbar */}
        <nav className={`${styles.navbar} ${open ? styles.activeMenu : ""}`}>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            Products
          </NavLink>

          <NavLink to="/login" className={styles.btn}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default PageNav;
