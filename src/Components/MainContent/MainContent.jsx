import Categories from "../Categories/Categories";
import Item from "../Item/Item";
import pic1 from "../../images/item-1.jpeg";
import pic2 from "../../images/item-2.jpeg";
import pic3 from "../../images/item-3.jpeg";
import pic4 from "../../images/item-4.jpeg";
import pic5 from "../../images/item-5.jpeg";
import pi6 from "../../images/item-6.jpeg";
import pic7 from "../../images/item-7.jpeg";
import pic8 from "../../images/item-8.jpeg";
import pic9 from "../../images/item-9.jpeg";
import pic10 from "../../images/item-10.jpeg";
import styles from "./MainContent.module.scss";
import { useCallback, useEffect, useState } from "react";

const categoryKeys = {
  all: 0,
  breakfast: 1,
  lunch: 3,
  shakes: 4,
};

const categoriesByKeyMap = {
  [categoryKeys.all]: {
    key: categoryKeys.all,
    displayName: "All",
  },
  [categoryKeys.breakfast]: {
    key: categoryKeys.breakfast,
    displayName: "Breakfast",
  },
  [categoryKeys.lunch]: {
    key: categoryKeys.lunch,
    displayName: "Lunch",
  },
  [categoryKeys.shakes]: {
    key: categoryKeys.shakes,
    displayName: "Shakes",
  },
};

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    categoryKey: categoryKeys.breakfast,
    price: 15.99,
    img: pic1,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    categoryKey: categoryKeys.lunch,
    price: 13.99,
    img: pic2,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    categoryKey: categoryKeys.shakes,
    price: 6.99,
    img: pic3,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    categoryKey: categoryKeys.breakfast,
    price: 20.99,
    img: pic4,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    categoryKey: categoryKeys.lunch,
    price: 22.99,
    img: pic5,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    categoryKey: categoryKeys.shakes,
    price: 18.99,
    img: pi6,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    categoryKey: categoryKeys.breakfast,
    price: 8.99,
    img: pic7,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    categoryKey: categoryKeys.lunch,
    price: 12.99,
    img: pic8,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    categoryKey: categoryKeys.shakes,
    price: 16.99,
    img: pic9,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    categoryKey: categoryKeys.lunch,
    price: 22.99,
    img: pic10,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const categoriesTabs = [
  categoriesByKeyMap[categoryKeys.all],
  categoriesByKeyMap[categoryKeys.breakfast],
  categoriesByKeyMap[categoryKeys.lunch],
  categoriesByKeyMap[categoryKeys.shakes],
];

const MainContent = () => {
  const [items, setItems] = useState(menu);

  const handleOnClick = useCallback((selectedCategory) => {
    if (selectedCategory === categoryKeys.all) {
      setItems(menu);

      return;
    }

    const result = menu.filter((menuItem) => {
      return menuItem.categoryKey === selectedCategory;
    });

    setItems(result);
  }, []);

  return (
    <div className={styles.MainContent}>
      <div className={styles.categoriesContainer}>
        {categoriesTabs.map((category) => (
          <Categories
            category={category.displayName}
            key={category.key}
            onClick={() => handleOnClick(category.key)}
          />
        ))}
      </div>
      <div className={styles.ItemsContainer}>
        {items.map((menuItem) => (
          <Item
            id={menuItem.id}
            key={menuItem.id}
            title={menuItem.title}
            price={menuItem.price}
            category={menuItem.category}
            img={menuItem.img}
            desc={menuItem.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
