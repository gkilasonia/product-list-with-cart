import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
import styles from "./ItemPlusMinusBtn.module.css";

function ItemPlusMinusBtn({ onMinus, onPlus, count }) {
  return (
    <div className={styles.minusPlusItemBTN}>
      <button onClick={onMinus} className={styles.minusBtn}>
        <img className={styles.minusIcon} src={minus} alt="" />
      </button>
      {count}
      <button onClick={onPlus} className={styles.plusBtn}>
        <img className={styles.plusIcon} src={plus} alt="" />
      </button>
    </div>
  );
}

export default ItemPlusMinusBtn;
