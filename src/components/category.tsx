import React, { FC } from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./layout";
import CategoriesList from "./left-pane/categories-list";

const Category: FC<{ data: TData }> = props => {
  const { frontmatter, body } = props.data.mdx;
  return (
    <Layout aside={<CategoriesList />}>
      <main>
        <h1>{frontmatter.category}</h1>
        <p>{new Date(frontmatter.date).toLocaleString()}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </main>
    </Layout>
  );
};

type TData = {
  mdx: {
    body: string;
    frontmatter: {
      category: string;
      date: string;
    };
  };
};

export const query = graphql`
  query CategoryById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        category
        date
      }
    }
  }
`;

export default Category;
