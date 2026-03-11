/* eslint-disable no-unused-vars */
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <>
      <PageNav />
      <main className={styles.product}>
        <section>
          <div>
            <h2>Everything You Need to Manage Your Packing List</h2>
            <p>
              Our Todo App is designed to simplify how you prepare for your
              trips. Add items to your packing list, manage quantities, and mark
              tasks as completed when they're packed. The smart sorting feature
              helps you quickly organize your items so you always know what’s
              left to prepare. <br />
              Built with modern web technologies, this app focuses on speed,
              simplicity, and a seamless user experience.
            </p>
          </div>
          <img
            src="coding.jpg"
            alt="person with dog overlooking mountain with sunset"
          />
        </section>
      </main>
    </>
  );
}
