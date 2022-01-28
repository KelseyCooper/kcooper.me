import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./Button.module.css";
function Button({ variant = "primary", children }) {
  return <button className={cx(styles.container)}>{children}</button>;
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
