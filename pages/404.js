import Link from "next/link";

import Layout from "../components/layout";
import styles from "../styles/404.module.css";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>404</h1>
        <h4>Sorry, There is nothing here</h4>
        <Link href="/">Go Back</Link>
      </div>
    </Layout>
  );
}
