import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import ContentContainer from "@components/content";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = props => {
  const { title, description } = props.data.site?.siteMetadata!;

  return (
    <Layout location={props.location}>
      <ContentContainer title="Welcome">
        <h1>{title}</h1>
        <p>{description}</p>

        <h2>JS Formatting</h2>
        <span>Current locale time: {new Date().toLocaleTimeString()}</span>
        <span>Current time: {new Date().toTimeString()}</span>
        <span>Current UTC date/time: {new Date().toUTCString()}</span>

        <br></br>
        <h2>Intl Formatting (en-us)</h2>
        <span>
          Intl.DateTimeFormat("en-us"):{" "}
          {Intl.DateTimeFormat("en-us").format(new Date())}
        </span>
        <span>
          Intl.DateTimeFormat 2-digits:{" "}
          {Intl.DateTimeFormat("en-us", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(new Date())}
        </span>
        <span>
          Intl.DateTimeFormat numeric:{" "}
          {Intl.DateTimeFormat("en-us", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }).format(new Date())}
        </span>

        <br></br>
        <h2>Intl Formatting (en-nz)</h2>
        <span>
          Intl.DateTimeFormat("en-nz"):{" "}
          {Intl.DateTimeFormat("en-nz").format(new Date())}
        </span>
        <span>
          Intl.DateTimeFormat 2-digits:{" "}
          {Intl.DateTimeFormat("en-nz", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(new Date())}
        </span>
        <span>
          Intl.DateTimeFormat numeric:{" "}
          {Intl.DateTimeFormat("en-nz", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }).format(new Date())}
        </span>
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query HomePageData {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;
