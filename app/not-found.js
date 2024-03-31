// pages/404.js

import Head from 'next/head';
import Link from 'next/link';
import styles from "./page.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.notfoundContainer}>
      <Head>
        <title>Page Not Found</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.notfoundContent}>
        <h1>404 - Page Not Found</h1>
        <p className={styles.notfoundP}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <p>Return to <Link href="/" className={styles.notfoundLink}>Homepage</Link></p>
      </div>
    </div>
  );
}
