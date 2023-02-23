import styles from "./Categories.module.scss";

const Categories = ({ category }) => {
  return (
    <div className={styles.App}>
      <button>{category}</button>
    </div>
  );
};

export default Categories;
