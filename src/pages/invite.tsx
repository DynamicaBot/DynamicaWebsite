import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useEffect } from "react";
export default function Invite(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    if (window) {
      window.location.replace(
        "https://discord.com/api/oauth2/authorize?client_id=916643283118198804&permissions=8&scope=bot%20applications.commands"
      );
    }
  }, []);

  return (
    <Layout
      title="Bot Invite"
      description="The bot invite link to invite it to your own server."
      image={"/img/banner.png"}
    >
      <h1 style={{ textAlign: "center" }}>Bot Invite Link</h1>
      <h2 style={{ textAlign: "center" }}>You will be redirected shortly.</h2>
    </Layout>
  );
}
