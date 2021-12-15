import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.boxBtn}>
    {options.map((name, id) => (
      <button
        key={id}
        className={style.button}
        type="button"
        onClick={() => onLeaveFeedback({ name })}
      >
        {name}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
