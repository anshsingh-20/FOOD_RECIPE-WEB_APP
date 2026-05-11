import styles from "./itemList.module.css";
import Item from "./item";

export default function ItemList({ food }) {
  const ingredients = food?.extendedIngredients ?? [];

  if (!ingredients.length) {
    return <p>No ingredients available.</p>;
  }

  return (
    <div className={styles.itemcontainer}>
      {ingredients.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}
