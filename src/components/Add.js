import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { increase } from "../redux/actions/countActions";

const Add = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increase(70));
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <p>+</p>
    </div>
  );
};

export default Add;
