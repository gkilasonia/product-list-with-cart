import { useContext } from "react";
import styles from "./DessertItem.module.css";
import AddToCartBtn from "../AddToCartBtn/addToCartBtn";
import ItemPlusMinusBtn from "../ItemPlusMinusBtn/ItemPlusMinusBtn";
import { AppContext } from "../../context/AppContext";

const DessertItem = () => {
  const { initialData, setInitialData, view, setView } = useContext(AppContext);

  function handleAddToCart(id) {
    setInitialData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: 1 } : item))
    );
  }

  function handleMinus(id) {
    setInitialData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
          : item
      )
    );
  }

  function handlePlus(id) {
    setInitialData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );
  }

  return (
    <section
      style={{ display: view === "shop" ? "flex" : "none" }}
      className={styles.dessertsList}
    >
      {initialData.map((item) => {
        const formattedName = item.category.toLowerCase().replace(/\s+/g, "-");
        const mobileImg = `/src/assets/images/image-${formattedName}-mobile.jpg`;
        const tabletImg = `/src/assets/images/image-${formattedName}-tablet.jpg`;
        const desktopImg = `/src/assets/images/image-${formattedName}-desktop.jpg`;
        const count = item.quantity || 0;

        return (
          <div className={styles.dessertItem} key={item.id}>
            <picture className={styles.itemImageContainer}>
              <source media="(min-width: 1024px)" srcSet={desktopImg} />
              <source media="(min-width: 768px)" srcSet={tabletImg} />
              <img
                className={styles.itemImage}
                src={mobileImg}
                alt={item.name}
              />
              {count === 0 ? (
                <AddToCartBtn onAdd={() => handleAddToCart(item.id)} />
              ) : (
                <ItemPlusMinusBtn
                  count={count}
                  onMinus={() => handleMinus(item.id)}
                  onPlus={() => handlePlus(item.id)}
                />
              )}
            </picture>

            <div className={styles.itemInfo}>
              <p className={styles.itemCategory}>{item.category}</p>
              <h1 className={styles.itemName}>{item.name}</h1>
              <p className={styles.itemPrice}>${item.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DessertItem;
