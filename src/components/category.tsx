import React, { FC } from "react";

import { graphql } from "gatsby";

import Layout from "./layout";
import CategoriesList from "./left-pane/categories-list";

const Category: FC<{
  data: GatsbyTypes.CategoryArticlesByCategoryQuery;
  pageContext: {
    category: string;
  };
}> = props => {
  const { edges } = props.data.allMdx;

  return (
    <Layout aside={<CategoriesList />}>
      <main>
        <h2>{props.pageContext.category}</h2>
        {edges.map(edge => (
          <>
            <h1>{edge.node.frontmatter?.title}</h1>
            <p>{new Date(edge.node.frontmatter?.date!).toLocaleString()}</p>
            <p>{edge.node.excerpt}</p>
            <hr />
          </>
        ))}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query CategoryArticlesByCategory($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: $category }, published: { eq: true } }
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            category
            title
            date
          }
        }
      }
    }
  }
`;

export default Category;
