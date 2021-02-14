import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = props => {
  const { title, description } = props.data.site?.siteMetadata!;

  return (
    <Layout location={props.location}>
      <main>
        <h2>Main page</h2>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </main>
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
