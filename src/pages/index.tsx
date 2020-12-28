import React from "react";
import Layout from "@components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>Main page</main>
    </Layout>
  );
};

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export default IndexPage;
