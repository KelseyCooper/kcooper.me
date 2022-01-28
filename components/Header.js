import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import { MobileNav } from "@/components";

import styles from "./Header.module.css";

const links = [
  { label: "Home", path: "/" },
  { label: "Kitchen Sink", path: "/KitchenSink" },
  { label: "Services", path: "/Services" },
  { label: "Usefull links", path: "/UsefulLinks" },
  { label: "Contact", path: "/Contact" },
];

const Header = () => {
  return (
    <header className={cx(styles.container)}>
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

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
