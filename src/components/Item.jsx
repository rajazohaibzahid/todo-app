import styles from "./Item.module.css";
export default function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={item.id}
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span
        className={styles.text}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} x {item.description}{" "}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={() => onDeleteItems(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
