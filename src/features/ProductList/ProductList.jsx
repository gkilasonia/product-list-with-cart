import styles from "./ProductList.module.css";
import DessertItem from "../../components/dessertItem/dessertItem";

function ProductList() {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>Desserts</h1>
      <DessertItem />
    </section>
  );
}

export default ProductList;
