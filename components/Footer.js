import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import styles from "./Footer.module.css";

const links = [
  { label: "Home", path: "/" },
  { label: "Kitchen Sink", path: "/KitchenSink" },
  { label: "Services", path: "/Services" },
  { label: "Contact", path: "/Contact" },
];

const Footer = () => (
  <footer className={cx(styles.container)}>
    <div className={cx(styles.inner)}>
      <div className={cx(styles.content)}>
        <div>
          <Image
            src="https://via.placeholder.com/150"
            alt="Logo"
            width={150}
            height={150}
          />
          <p>
            I&apos;m baby banjo kale chips small batch locavore migas raclette paleo
            schlitz literally vaporware live-edge vice mlkshk. Blue bottle you
            probably haven&apos;t heard of them sriracha vaporware raclette. Trust
            fund health goth retro, green juice viral palo santo godard brunch
            vape.
          </p>
        </div>
        <div>
          <h4 className={cx(styles.heading)}>Quick links</h4>
          <ul className={cx(styles.links)}>
            {links.map((link) => (
              <li key={`footer-${link.label}`}>
                <Link href={link.path}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={cx(styles.heading)}>Address</h4>
        </div>
        <div>
          <h4 className={cx(styles.heading)}>Contact</h4>
        </div>
      </div>

      <div className={cx(styles.copyright)}>
        <p>Developed by CooperCreative</p>
        <p>Copyright &#169; {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
