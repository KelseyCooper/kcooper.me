import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import cx from 'classnames'

import themeColors from 'styles/themeColors'

import styles from './Header.module.css'

const links = [
  { label: 'Home', path: '#Home' },
  { label: 'About', path: '#About' },
  { label: 'Text', path: '#Text' },
  { label: 'Banana', path: '#Banana' },
  { label: 'Kitchen Sink', path: '/KitchenSink' },
  { label: 'Usefull links', path: '/UsefulLinks' },
]

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
  let themeColorIndex = 0

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

  const handleClick = () => {
    const themeColorsArray = Object.keys(themeColors)

    themeColorIndex =
      themeColorIndex < themeColorsArray.length - 1 ? (themeColorIndex += 1) : 0

    const themeColorKey = themeColorsArray[themeColorIndex]
    document.documentElement.style.setProperty(
      '--color-text',
      themeColors[themeColorKey].text
    )
    document.documentElement.style.setProperty(
      '--color-text-light',
      themeColors[themeColorKey].textLight
    )
    document.documentElement.style.setProperty(
      '--color-background',
      themeColors[themeColorKey].background
    )
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
          <ul className={cx(styles.links)}>
            <button onClick={handleClick}>color</button>
            {links.map(link => (
              <li key={link.label}>
                {inViewSection === link.label ? <span>x</span> : ''}
                <Link href={link.path}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </motion.header>
  )
}

export default Header
