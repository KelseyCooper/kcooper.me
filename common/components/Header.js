import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import cx from 'classnames'

import { ColorThemeToggle } from 'common/components/'

import styles from './Header.module.css'

const variants = {
  header: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
}

const Header = ({ inViewSection }) => {
  const [headerVisible, setHeaderVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, true)
    }
  })

  const handleScroll = () => {
    if (scrollY < window.scrollY) {
      if (headerVisible) {
        setHeaderVisible(false)
      }

      setScrollY(window.scrollY)
    } else if (scrollY > window.scrollY) {
      if (!headerVisible) {
        setHeaderVisible(true)
      }
      setScrollY(window.scrollY)
    }
  }

  return (
    <motion.header
      className={cx(styles.container)}
      initial={false}
      animate={headerVisible ? 'visible' : 'hidden'}
      variants={variants.header}
      transition={{ ease: 'anticipate', duration: 1 }}
    >
      <header className={cx(styles.container, { visible: headerVisible })}>
        <div className={cx(styles.inner)}>
          <div className={cx(styles.logo)}>
            <Link href={'/'} passHref>
              <div>
                <span className={cx(styles.logoFirst)}>K.</span>
                <span className={cx(styles.logoLast)}>Cooper</span>
              </div>
            </Link>
          </div>
          <ColorThemeToggle />
        </div>
      </header>
    </motion.header>
  )
}

export default Header
