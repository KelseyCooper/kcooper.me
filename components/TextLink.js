import PropTypes from "prop-types";
import Link from "next/link";
import cx from "classnames";

import styles from "./TextLink.module.css";

const TextLink = ({ path, label, style = "primary" }) => {
  return (
    <Link href={path}>
      <a className={cx(styles.link, styles[style])}>{label}</a>
    </Link>
  );
};

TextLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default TextLink;
