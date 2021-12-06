import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--secondary" style={{}}>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <img src="/img/dynamica.svg" style={{ margin: "1em" }} height="300px" />
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Getting Started
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://discord.com/api/oauth2/authorize?client_id=916643283118198804&permissions=285212688&scope=bot%20applications.commands"
              style={{ margin: "0 1em" }}
            >
              Invite
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
