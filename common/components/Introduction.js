import cx from 'classnames'

import { Section } from 'common/components'
import styles from './Introduction.module.css'

const Introduction = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className={cx(styles.container, 'section')}>
        <div className={cx(styles.inner)}>
          <div>children</div>
        </div>
      </div>
    </Section>
  )
}

export default Introduction
