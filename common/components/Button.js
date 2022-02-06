import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Button.module.css'
function Button({
  variant = 'primary',
  children,
  disabled = false,
  type = 'submit',
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cx(styles.button, styles[variant])}
    >
      <span>{children}</span>
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
