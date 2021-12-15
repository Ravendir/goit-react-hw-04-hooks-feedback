import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => (
  <div className={style.content}>
    <h2 className={style.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
