import Head from "next/head";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ditto Partner App</title>
        <meta name="description" content="App for Ditto Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Welcome to Ditto Partners</h3>
      </main>
      <div className={styles.container}>
        <form className={styles.card}>
          <h2>Log In to your Account</h2>
          <label htmlFor="username">User Name</label>
          <input id="username" placeholder="User Name" />

          <label htmlFor="password">Password</label>
          <input id="password" placeholder="password" type="password" />

          <button className={styles.button}>LOG IN</button>
        </form>
      </div>
    </Layout>
  );
}
