import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToTop from "./ScrollToTop";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
