import styles from "./Stats.module.css";

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className={styles.stats}>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className={styles.stats}>
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage} %) `}
      </em>
    </footer>
  );
}
