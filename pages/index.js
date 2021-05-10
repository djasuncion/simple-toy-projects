import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Expanding Panels</title>
        <meta name="description" content="Expanding panels project." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div
          className={`${styles.panel} ${styles.active}`}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={styles.panel}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={styles.panel}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={styles.panel}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={styles.panel}
          style={{
            backgroundImage:
              'url( "https://images.pexels.com/photos/612999/pexels-photo-612999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
          }}
        >
          <h3>Explore The World</h3>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
