import React, { FC } from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./layout";
import ArticlesList from "./left-pane/articles-list";

const Article: FC<{ data: GatsbyTypes.ArticleByIdQuery }> = props => {
  const { frontmatter, body } = props.data.mdx!;
  return (
    <Layout aside={<ArticlesList />}>
      <main>
        <h1>{frontmatter?.title}</h1>
        <p>{new Date(frontmatter?.date!).toLocaleString()}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ArticleById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`;

export default Article;
