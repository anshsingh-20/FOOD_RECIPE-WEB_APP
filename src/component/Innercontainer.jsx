import Styles from "./Innercontainer.module.css";
export default function Innercontainer({ children }) {
  return <div className={Styles.Innercontainer}>{children}</div>;
}
