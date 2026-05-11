import styles from "./Fooditem.module.css";
export default function Fooditem({ item, setfoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={item.image} alt="" />
      <div className={styles.titlecontainer}>
        <p>{item.title}</p>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setfoodId(item.id);
        }}>
        View Recipe
      </button>
    </div>
  );
}
