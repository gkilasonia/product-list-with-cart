import styles from "./AddToCartBtn.module.css";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";

const AddToCartBtn = ({ onAdd }) => {
  return (
    <button onClick={onAdd} className={styles.addToCartBTN}>
      <img className={styles.icon} src={cartIcon} alt="" />
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
