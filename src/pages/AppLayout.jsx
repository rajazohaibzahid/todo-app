/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Form from "../components/Form";
import Logo from "../components/Logo";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import styles from "./AppLayout.module.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: true },
];

function AppLayout() {
  // const [items, setItems] = useState([]);

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todo-items");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
    localStorage.removeItem("todo-items");
  }
  return (
    <>
      <div className={styles.app}>
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          setItems={setItems}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
          onClearList={handleClearList}
        />

        <Stats items={items} />
      </div>
    </>
  );
}

export default AppLayout;
