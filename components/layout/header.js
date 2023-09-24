import styles from "./header.module.css";
import Link from "next/link";
import Logo from "../logo/logo";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { usePathname } from "next/navigation";
function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const pathname = usePathname();
  function displayLinks() {
    setShowLinks(true);
  }
  function hideLinks() {
    setShowLinks(false);
  }
  return (
    <>
    <header className={`${styles.header} section-center`}>
      <div className={styles.navigation}>
        <Logo />
        <ul className={styles.navLinks}>
          <li>
            <Link
              className={`${pathname === "/" ? styles.active : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/about" ? styles.active : ""}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/blogs" ? styles.active : ""}`}
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/contact" ? styles.active : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link className={`${styles.subscribe} btn`} href="/subscribe">
          subscribe
        </Link>
      </div>
    </header>
    <nav className={styles.nav}>
      <div className={`${styles.navCenter} section-center`}>
        <div className={styles.navHeader}>
          <Logo />
          {!showLinks ? (
            <button onClick={displayLinks} className={styles.navToggle}>
              {" "}
              <FaBars />
            </button>
          ) : (
            <button onClick={hideLinks} className={styles.navToggle}>
              {" "}
              <AiOutlineClose />
            </button>
          )}
        </div>
        {showLinks && (
          <div
            className={
              showLinks
                ? [styles.linksContainer, styles.showContainer]
                : styles.linksContainer
            }
          >
            <ul className={styles.links}>
              <li>
                <Link onClick={hideLinks} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={hideLinks} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={hideLinks} href="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link onClick={hideLinks} href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={hideLinks} href="/subscribe">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  </>
  
  );
}

export default Header;
