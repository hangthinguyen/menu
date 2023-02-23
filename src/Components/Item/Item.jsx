import styles from "./Item.module.scss";

const Items = ({ id, title, category, desc, img, price }) => {
  return (
    <div className={styles}>
      <img src={img} alt="img" />
      <div>
        <div>
          <h4>{title}</h4>
          <h4>{price}</h4>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Items;
