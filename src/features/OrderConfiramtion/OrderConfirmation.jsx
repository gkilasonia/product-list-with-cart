import data from "../../data/data.json";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./OrderConfirmation.module.css";
import orderConfirmedIcon from "../../assets/images/icon-order-confirmed.svg";
import baklavaThumbnail from "../../assets/images/image-baklava-thumbnail.jpg";
import brownieThumbnail from "../../assets/images/image-brownie-thumbnail.jpg";
import cakeThumbnail from "../../assets/images/image-cake-thumbnail.jpg";
import cremeBruleeThumbnail from "../../assets/images/image-creme-brulee-thumbnail.jpg";
import macaronThumbnail from "../../assets/images/image-macaron-thumbnail.jpg";
import meringueThumbnail from "../../assets/images/image-meringue-thumbnail.jpg";
import pannaCottaThumbnail from "../../assets/images/image-panna-cotta-thumbnail.jpg";
import tiramisuThumbnail from "../../assets/images/image-tiramisu-thumbnail.jpg";
import waffleThumbnail from "../../assets/images/image-waffle-thumbnail.jpg";

const thumbnailMap = {
  "Pistachio Baklava": baklavaThumbnail,
  "Salted Caramel Brownie": brownieThumbnail,
  "Red Velvet Cake": cakeThumbnail,
  "Vanilla Bean Crème Brûlée": cremeBruleeThumbnail,
  "Macaron Mix of Five": macaronThumbnail,
  "Lemon Meringue Pie": meringueThumbnail,
  "Vanilla Panna Cotta": pannaCottaThumbnail,
  "Classic Tiramisu": tiramisuThumbnail,
  "Waffle with Berries": waffleThumbnail,
};

function OrderConfirmation() {
  const { initialData, setInitialData, view, setView } = useContext(AppContext);

  // Get only items that were ordered
  const confirmedItems = initialData.filter((item) => item.quantity > 0);

  // Calculate order total
  const orderTotal = confirmedItems.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price),
    0
  );

  return (
    <section
      style={{ display: view === "confirmation" ? "flex" : "none" }}
      className={styles.orderConfirmationContainer}
    >
      <div className={styles.titleInfoContainer}>
        <img src={orderConfirmedIcon} alt="" />
        <div className={styles.titleContainer}>
          <h1 className={styles.orderConfirmedTitle}>Order Confirmed</h1>
          <span className={styles.orderConfirmedText}>
            We hope you enjoy your food!
          </span>
        </div>
      </div>
      <div className={styles.confirmedItemsContainer}>
        {confirmedItems.map((item, idx) => (
          <div key={item.id} className={styles.confirmedItemContainer}>
            <div className={styles.confirmedItem}>
              <div className={styles.confirmedItemsImgAndInfo}>
                <img
                  className={styles.itemThumbnail}
                  src={thumbnailMap[item.name] || ""}
                  alt={item.name}
                />
                <div className={styles.confirmedItemInformation}>
                  <h2 className={styles.confirmedItemHeader}>{item.name}</h2>
                  <div className={styles.confirmedItemquantiyAndPrice}>
                    <span className={styles.confirmedItemquantity}>
                      {item.quantity}x
                    </span>
                    <span className={styles.confirmedItemPrice}>
                      @ ${item.price}
                    </span>
                  </div>
                </div>
              </div>
              <span className={styles.confirmedItemTotalPrice}>
                ${(item.quantity * parseFloat(item.price)).toFixed(2)}
              </span>
            </div>
            {idx < confirmedItems.length - 1 && (
              <hr className={styles.separator} />
            )}
          </div>
        ))}
        <hr className={styles.separator} />
        <div className={styles.orderTotalContainer}>
          <span className={styles.orderTotal}>Order Total</span>
          <span className={styles.orderTotalPrice}>
            ${orderTotal.toFixed(2)}
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          setInitialData(data); // Reset cart/items
          setView("shop"); // Show ProductList and Cart
        }}
        className={styles.startNewOrderBtn}
      >
        Start New Order
      </button>
    </section>
  );
}

export default OrderConfirmation;
