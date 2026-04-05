import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../components/Logo";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import ConfirmModal from "../components/ConfirmModal";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";

import styles from "./AppLayout.module.css";

function AppLayout() {
  const navigate = useNavigate();

  // get logged in user
  const user = getCurrentUser();

  // authentication check
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  // load todos for this user
  const [items, setItems] = useState(() => {
    if (!user) return [];
    const saved = localStorage.getItem(`todos-${user}`);
    return saved ? JSON.parse(saved) : [];
  });

  // save todos for this user
  useEffect(() => {
    if (user) {
      localStorage.setItem(`todos-${user}`, JSON.stringify(items));
    }
  }, [items, user]);

  //////////////////////////////////////Old Method for Signup without auth.js

  // useEffect(() => {
  //   const user = localStorage.getItem("currentUser");

  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  // const [items, setItems] = useState(() => {
  //   const saved = localStorage.getItem("todo-items");
  //   return saved ? JSON.parse(saved) : [];
  // });

  ///////////////////////

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [modalType, setModalType] = useState(null);

  // Save todos to localStorage
  // useEffect(() => {
  //   localStorage.setItem("todo-items", JSON.stringify(items));
  // }, [items]);

  // Add item
  function handleAddItems(item) {
    toast.success("Item added to the list!");
    setItems((items) => [...items, item]);
  }

  // Open delete modal
  function handleDeleteItems(id) {
    setDeleteId(id);
    setModalType("delete");
    setShowModal(true);
  }

  // Toggle packed status
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  // Open clear list modal
  function handleClearList() {
    setModalType("clear");
    setShowModal(true);
  }

  // Confirm modal action
  function confirmAction() {
    if (modalType === "delete") {
      setItems((items) => items.filter((item) => item.id !== deleteId));
    }

    if (modalType === "clear") {
      setItems([]);
      localStorage.removeItem("todo-items");
    }

    setShowModal(false);
    setDeleteId(null);
    setModalType(null);
  }

  // Cancel modal
  function cancelAction() {
    setShowModal(false);
    setDeleteId(null);
    setModalType(null);
  }

  return (
    <>
      <div className={styles.app}>
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>

      {/* Confirm Modal */}
      {showModal && (
        <ConfirmModal
          message={
            modalType === "delete"
              ? "Are you sure you want to delete this todo?"
              : "Are you sure you want to clear the entire list?"
          }
          onConfirm={confirmAction}
          onCancel={cancelAction}
        />
      )}
    </>
  );
}

export default AppLayout;

//--------------------Old AppLayout.jsx--------------------

// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import Form from "../components/Form";
// import Logo from "../components/Logo";
// import PackingList from "../components/PackingList";
// import Stats from "../components/Stats";
// import styles from "./AppLayout.module.css";
// import ConfirmModal from "../components/ConfirmModal";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];

// function AppLayout() {
//   // const [items, setItems] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const [items, setItems] = useState(() => {
//     const saved = localStorage.getItem("todo-items");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("todo-items", JSON.stringify(items));
//   }, [items]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItems(id) {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this todo?",
//     );
//     if (confirmDelete) {
//       setShowModal(true);
//       setItems((items) => items.filter((item) => item.id !== id));
//     }
//   }

//   function handleToggleItems(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item,
//       ),
//     );
//   }

//   function handleClearList() {
//     const confirm = window.confirm("Are you sure you want to clear the list?");
//     if (confirm) setItems([]);
//     localStorage.removeItem("todo-items");
//   }
//   return (
//     <>
//       <div className={styles.app}>
//         <Logo />
//         <Form onAddItems={handleAddItems} />
//         <PackingList
//           items={items}
//           setItems={setItems}
//           onDeleteItems={handleDeleteItems}
//           onToggleItems={handleToggleItems}
//           onClearList={handleClearList}
//         />

//         <Stats items={items} />
//       </div>
//     </>
//   );
// }

// export default AppLayout;
