import PropTypes from 'prop-types'
import cx from 'classnames'

import { TextLink } from 'common/components'
import { Section } from 'common/components'

import styles from './Text.module.css'

const Text = ({
  heading,
  headingAlignment = 'left',
  content,
  path,
  label,
  id,
  setInViewSection,
}) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className="section">
        <div className={cx(styles.container)}>
          <h2 className={cx(styles.heading, styles[headingAlignment])}>
            {heading}
          </h2>
          <div className={cx(styles.content)}>
            <p>{content}</p>
            {path && label ? <TextLink path={path} label={label} /> : ''}
          </div>
        </div>
      </div>
    </Section>
  )
}

Text.propTypes = {
  heading: PropTypes.string.isRequired,
  headingAligment: PropTypes.string,
  content: PropTypes.string.isRequired,
  path: PropTypes.string,
  label: PropTypes.string,
}

export default Text
