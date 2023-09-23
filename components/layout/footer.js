import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../logo/logo";
import Social from "../socials/socials";

function Footer() {
  return (
    <footer className={`${styles.footer} section-center`}>
      <Logo />
      <ul className={styles.footerLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Social />
    </footer>
  );
}

export default Footer;
