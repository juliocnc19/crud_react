import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppAdmin from "./AppAdmin";
import { ProductContextProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <AppAdmin />
    </ProductContextProvider>
  </React.StrictMode>
);
