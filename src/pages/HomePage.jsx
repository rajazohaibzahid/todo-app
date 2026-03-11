/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <PageNav />
      <main className={styles.homepage}>
        <section>
          <h1>
            Stay <span>Organized</span>. Plan <span>Smarter</span>.
          </h1>
          <h2>
            Our Todo App helps you keep track of everything you need for your
            trips and daily tasks. Quickly add items, manage your packing list,
            and stay organized wherever you go. With a clean interface and
            simple controls, planning has never been easier.
          </h2>
          <p className={styles.text}>“Never forget what to pack again.”</p>
          <Link to="/app" className="cta">
            Get Started
          </Link>
        </section>
      </main>
    </>
  );
}
