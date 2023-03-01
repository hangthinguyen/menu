import styles from "./Item.module.scss";

const Items = ({ title, desc, img, price }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={img} alt="img" />
      </div>
      <div className={styles.ItemRightSide}>
        <div className={styles.ItemUpperRight}>
          <h4 className={styles.title}>{title}</h4>
          <h4 className={styles.price}>{price}</h4>
        </div>
        <div className={styles.underline}></div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Items;
