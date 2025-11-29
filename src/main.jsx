import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OnlineDessertsShopPage from "./pages/onlineDessertsShopPage/OnlineDessertsShopPage.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OnlineDessertsShopPage />
  </StrictMode>
);
