import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./Text.module.css";

import { TextLink } from "@/components";

const Text = ({ heading, headingAlignment = "left", content, path, label }) => {
  return (
    <section className="section">
      <div className={cx(styles.container)}>
        <h2 className={cx(styles.heading, styles[headingAlignment])}>
          {heading}
        </h2>
        <div className={cx(styles.content)}>
          <p>{content}</p>
          {path && label ? <TextLink path={path} label={label} /> : ""}
        </div>
      </div>
    </section>
  );
};

Text.propTypes = {
  heading: PropTypes.string.isRequired,
  headingAligment: PropTypes.string,
  content: PropTypes.string.isRequired,
  path: PropTypes.string,
  label: PropTypes.string,
};

export default Text;
