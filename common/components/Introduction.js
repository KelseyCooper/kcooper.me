import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'

import styles from './Introduction.module.css'

const headingArray = ['Developer', 'Designer', 'Woodworker']

const Introduction = () => {
  const [headingIterator, setheadingIterator] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      headingIterator < headingArray.length - 1
        ? setheadingIterator(++headingIterator)
        : setheadingIterator(0)
    }, 6500)
  })

  return (
    <section className={cx(styles.container)}>
      <h2 className={cx(styles.heading)}>
        {headingArray[headingIterator].split('').map((char, i) => {
          return (
            <motion.span
              className={cx(styles.char)}
              key={`${headingArray[headingIterator]}--${char}--${i}`}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -35 }}
              transition={{ delay: 0.1 * i, ease: 'easeIn', duration: 1 }}
            >
              {char}
            </motion.span>
          )
        })}
      </h2>
    </section>
  )
}

export default Introduction
