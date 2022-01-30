import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import cx from "classnames";

import styles from "./Header.module.css";

const links = [
  { label: "Home", path: "/" },
  { label: "Kitchen Sink", path: "/KitchenSink" },
  { label: "Services", path: "/Services" },
  { label: "Usefull links", path: "/UsefulLinks" },
  { label: "Contact", path: "/Contact" },
];

const variants = {
  header: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
};

const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, true)
    };
  });

  const handleScroll = () => {
    if (scrollY < window.scrollY) {
      if (headerVisible) {
        setHeaderVisible(false);
      }

      setScrollY(window.scrollY)
    }
    else if (scrollY > window.scrollY) {
      if (!headerVisible) {
        setHeaderVisible(true);
      }
      setScrollY(window.scrollY)
    }
  }
  return (
    <motion.header
      className={cx(styles.container)}
      initial={false}
      animate={headerVisible ? "visible" : "hidden"}
      variants={variants.header}
      transition={{ ease: "anticipate", duration: 1 }}
    >
      <header className={cx(styles.container, { "visible": headerVisible})}>
        <div className={cx(styles.inner)}>
          <div className={cx(styles.logo)}>
            <Link href={"/"}>
              <a>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Logo"
                  width={160}
                  height={60}
                />
              </a>
            </Link>
          </div>
          <ul className={cx(styles.links)}>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.path}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </motion.header>
  );
};

export default Header;
