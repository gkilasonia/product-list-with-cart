import { useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import data from "../../data/data.json";
import ProductList from "../../features/ProductList/ProductList.jsx";
import Cart from "../../features/Cart/Cart.jsx";
import OrderConfirmation from "../../features/OrderConfiramtion/OrderConfirmation.jsx";
import styles from "./onlineDessertsShopPage.module.css";

function OnlineDessertsShopPage() {
  const [initialData, setInitialData] = useState(data);
  const [view, setView] = useState("shop");

  const contextValue = { initialData, setInitialData, view, setView };

  return (
    <AppContext.Provider
      value={contextValue}
      className={styles.container}
      styles={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <ProductList />
      <Cart />
      <OrderConfirmation />
    </AppContext.Provider>
  );
}

export default OnlineDessertsShopPage;
