import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>grindC0dex</title>
        <meta
          name="description"
          content="Execute como um artesão. Pense como um arquiteto."
        />
      </Head>

      <main className={styles.container}>
        <section className={styles.content}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <span>&gt;</span> grindC0dex
            </div>

            <div className={styles.tagline}>
              <span>Execute como um artesão.</span>
              <span>Pense como um arquiteto.</span>
            </div>
          </header>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.terminalBody}>
              <p>
                <strong>$</strong> npm run build
              </p>

              <p className={styles.dim}>&gt; grindC0dex@0.1.0 build</p>

              <p>Building your knowledge...</p>

              <p className={styles.progress}>████████████████████░░░░ 82%</p>

              <p className={styles.success}>✓ React initialized</p>
              <p className={styles.success}>✓ Next.js configured</p>
              <p className={styles.success}>✓ Ideas structured</p>
              <p className={styles.success}>✓ Community coming soon</p>

              <p className={styles.status}>
                &gt; Status: UNDER CONSTRUCTION
                <span className={styles.cursor}>_</span>
              </p>
            </div>
          </div>

          <footer className={styles.footer}>
            grindC0dex <span>v0.1.0</span>
          </footer>
        </section>
      </main>
    </>
  );
}

export default Home;
