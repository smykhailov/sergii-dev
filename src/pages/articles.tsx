import React, { FC } from "react";
import { graphql, Link } from "gatsby";

import Layout from "@components/layout";
import ArticlesList from "@components/left-pane/articles-list";

const ArticlesPage: FC<{
  data: GatsbyTypes.ArticlesPageDataQuery;
}> = props => {
  const { edges } = props.data.allMdx;

  return (
    <Layout aside={<ArticlesList />}>
      <main>
        <h1>Posts</h1>
        <ul>
          {edges.map(edge => {
            if (!edge.node.fields?.slug || !edge.node.frontmatter?.date) {
              return null;
            }

            const {
              id,
              excerpt,
              fields: { slug },
              frontmatter: { title, date },
            } = edge.node;

            return (
              <li key={id}>
                <Link to={slug}>
                  <h2>{title}</h2>
                </Link>
                <p>{new Date(date).toLocaleDateString()}</p>
                <p>{excerpt}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ArticlesPageData {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
