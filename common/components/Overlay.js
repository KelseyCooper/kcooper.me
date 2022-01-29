import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./Overlay.module.css";

const Overlay = ({ opacity = 0 }) => {
  return (
    <div
      className={cx(styles.container)}
      style={{ "--overlay-opacity": opacity }}
    ></div>
  );
};

Overlay.propTypes = {
  opacity: PropTypes.number,
};

export default Overlay;
