/* eslint-disable no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Homepage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app" element={<AppLayout />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
}
