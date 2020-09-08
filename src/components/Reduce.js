import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { decrease } from "../redux/actions/countActions";

const Reduce = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(decrease());
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <p>-</p>
    </div>
  );
};

export default Reduce;
