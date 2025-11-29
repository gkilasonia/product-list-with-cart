import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Cart.module.css";
import emptyCart from "../../assets/images/illustration-empty-cart.svg";
import carbonNeutral from "../../assets/images/icon-carbon-neutral.svg";
import removeItem from "../../assets/images/icon-remove-item.svg";

function Cart() {
  const { initialData, setInitialData, view, setView } = useContext(AppContext);

  const cartItems = initialData.filter((item) => item.quantity > 0);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price),
    0
  );

  // Handler to remove item (set quantity to 0)
  function handleRemove(id) {
    setInitialData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: 0 } : item))
    );
  }

  return (
    <section
      style={{ display: view === "shop" ? "flex" : "none" }}
      className={styles.container}
    >
      {/* Empty Cart */}
      <div
        className={styles.emptyCartContainer}
        style={{ display: cartItems.length === 0 ? "flex" : "none" }}
      >
        <h1 className={styles.header}>Your Cart (0)</h1>
        <div className={styles.emptyContainer}>
          <img className={styles.emptyImage} src={emptyCart} alt="" />
          <p className={styles.emptyText}>Your added items will appear here</p>
        </div>
      </div>

      {/* Cart with Items */}
      <div
        className={styles.cartContainer}
        style={{ display: cartItems.length > 0 ? "flex" : "none" }}
      >
        <h1 className={styles.header}>Your Cart ({totalQuantity})</h1>
        <div className={styles.addedItems}>
          {cartItems.map((item) => (
            <div className={styles.addedItemOnCart} key={item.id}>
              <div className={styles.addedItemInformation}>
                <h2 className={styles.addedItemHeader}>{item.name}</h2>
                <div className={styles.quantityAndPrice}>
                  <span className={styles.quantity}>{item.quantity}x</span>
                  <span>@ ${item.price}</span>
                  <span className={styles.price}>
                    ${(item.quantity * parseFloat(item.price)).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                className={styles.removeItemBtn}
                onClick={() => handleRemove(item.id)}
              >
                <img src={removeItem} alt="" />
              </button>
            </div>
          ))}
        </div>
        <hr className={styles.separator} />
        <div className={styles.orderTotalContainer}>
          <span className={styles.orderTotal}>Order Total</span>
          <span className={styles.orderTotalPrice}>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className={styles.carbonInfoContainer}>
          <img className={styles.carbonTree} src={carbonNeutral} alt="" />
          <span className={styles.carbonInfoText}>
            This is a{" "}
            <span className={styles.carbonNeutralText}>carbon-neutral</span>{" "}
            delivery
          </span>
        </div>
        <button
          onClick={() => setView("confirmation")}
          className={styles.confirmOrderBtn}
        >
          Confirm Order
        </button>
      </div>
    </section>
  );
}

export default Cart;
