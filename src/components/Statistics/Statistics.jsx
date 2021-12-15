import ProtType from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>Good: {good}</li>
      <li className={style.item}>Neutral: {neutral}</li>
      <li className={style.item}>Bad: {bad}</li>
      <li className={style.item}>Total: {total}</li>
      <li className={style.item}>Positive feedback: {percentage}%</li>
    </ul>
  );
};

Statistics.protType = {
  good: ProtType.number,
  neutral: ProtType.number,
  bad: ProtType.number,
  total: ProtType.number,
  percentage: ProtType.number,
};

export default Statistics;
