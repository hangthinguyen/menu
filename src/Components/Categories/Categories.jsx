import { useCallback } from "react";
import styles from "./Categories.module.scss";

const Categories = ({ category, onClick }) => {
  return (
    <div className={styles.categoryContainer}>
      <button className={styles.btn} onClick={onClick}>
        {category}
      </button>
    </div>
  );
};

export default Categories;
