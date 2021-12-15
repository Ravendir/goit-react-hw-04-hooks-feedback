import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ message }) => (
  <h3 className={style.title}>{message}</h3>
);

Notification.propType = {
  message: PropTypes.string,
};

export default Notification;
