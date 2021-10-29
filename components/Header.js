import Link from "next/Link";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Ditto Partners</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/partner">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/signout">
              <a>Sign Out</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
