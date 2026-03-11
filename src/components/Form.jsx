import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className={styles.form}>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <h3 className={styles.title}>What do you need for your Trip 😍</h3>

        <select
          className={styles.select}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <input
          className={styles.input}
          type="text"
          placeholder="Add your item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className={`${styles.btn} ${styles.addBtn}`}>
          Add
        </button>
      </form>
    </div>
  );
}
