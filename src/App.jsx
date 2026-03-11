/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app" element={<AppLayout />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
