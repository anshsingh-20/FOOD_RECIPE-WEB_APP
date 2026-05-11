import Fooditem from "./Fooditem";
import styles from "./foodList.module.css";

export default function Foodlist({ fooditem, setfoodId }) {
  return (
    <div className={styles.list}>
      {fooditem.map((item) => (
        <Fooditem key={item.id} item={item} setfoodId={setfoodId} />
      ))}
    </div>
  );
}
