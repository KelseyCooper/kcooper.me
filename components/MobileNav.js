import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import cx from "classnames";

import { Close } from "@/icons";
import styles from "./MobileNav.module.css";

const links = [
  { label: "Home", path: "/" },
  { label: "Kitchen Sink", path: "/KitchenSink" },
  { label: "Services", path: "/Services" },
  { label: "Contact", path: "/Contact" },
];

const animation = {
  drawer: {
    open: { opacity: 1, display: "block" },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  },
  nav: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  navItem: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const panelRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      enableBodyScroll(panelRef.current);
    } else {
      disableBodyScroll(panelRef.current);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && isOpen) {
      handleToggle();
    }
  };

  return (
    <div className={cx(styles.container)} onKeyDown={handleKeyDown}>
      <button onClick={handleToggle} className={cx(styles.trigger)}>
        Burger
      </button>
      <motion.div
        className={cx(styles.panel)}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={animation.drawer}
        ref={panelRef}
      >
        <div className={cx(styles.content)}>
          <button className={styles.close} onClick={handleToggle}>
            <Close />
          </button>
          <motion.ul className={cx(styles.links)} variants={animation.nav}>
            {links.map((link) => (
              <motion.li
                key={`mobile-nav-${link.label}`}
                variants={animation.navItem}
              >
                {router.pathname === link.path ? (
                  <span>{link.label}</span>
                ) : (
                  <Link href={link.path}>
                    <a>{link.label}</a>
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
