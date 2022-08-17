import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "@fontsource/open-sans";
// import "@fontsource/alegreya-sans";
// import "@fontsource/readex-pro";
import "@fontsource/arvo";
// import "@fontsource/asap";
// import "@fontsource/space-mono";
// import "@fontsource/bebas-neue";
// import "@fontsource/archivo-narrow";
import "@fontsource/open-sans-condensed";
// import "@fontsource/roboto";
// import "@fontsource/roboto-condensed";
// import "@fontsource/roboto-slab";
import "@fontsource/overpass";
import "@fontsource/anonymous-pro";
import "@fontsource/orbitron";

import styles from "./index.module.css";
<link rel="stylesheet" href="https://use.typekit.net/net5egr.css"></link>;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.gameTitle)}>
          {siteConfig.title} [BETA]
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/rules/intro"
          >
            Get Started
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/rules/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
