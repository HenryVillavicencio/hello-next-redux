import { useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";

const Count = () => {
  const count = useSelector((state) => state.count);
  return (
    <div className={styles.card}>
      <p className={styles.title}>Saldo {count} </p>
    </div>
  );
};

export default Count;
