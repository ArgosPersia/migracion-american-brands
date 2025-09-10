import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesApp from "./routes/routesApp.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);