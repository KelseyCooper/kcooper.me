import cx from 'classnames'

import { Section } from 'common/components'

import styles from './Slideshow.module.css'

const Slideshow = () => {
  return (
    <Section>
      <div className={cx(styles.container, 'section section--full-width')}>
        content
      </div>
    </Section>
  )
}

export default Slideshow
