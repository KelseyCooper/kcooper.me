import { useRef } from 'react'
import cx from 'classnames'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { Section } from 'common/components'
import useRefScrollProgress from 'common/hooks/useRefScrollProgress'

import styles from './Slideshow.module.css'

const Slideshow = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className={cx(styles.container, 'section section--full-width')}>
        content
      </div>
    </Section>
  )
}

export default Slideshow
