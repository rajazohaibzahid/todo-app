/* eslint-disable no-unused-vars */
// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <>
      <PageNav />
      <main className={styles.product}>
        <section>
          <div>
            <h2>
              Simple pricing.
              <br />
              for a Simple App
            </h2>
            <p>
              Start organizing your trips without any hassle. Our Todo App
              offers essential features completely free so you can focus on
              planning your journey instead of managing complicated tools. As
              the platform evolves, more advanced productivity features may
              become available.
            </p>
          </div>
          <img
            src="attention.jpg"
            alt="overview of a large city with skyscrapers"
          />
        </section>
      </main>
    </>
  );
}
