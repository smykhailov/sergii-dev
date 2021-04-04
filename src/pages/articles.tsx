import React, { FC } from "react";
import { graphql, Link } from "gatsby";

import Layout from "@components/layout";
import ArticlesList from "@components/left-pane/articles-list";
import ContentContainer from "@components/content";

const ArticlesPage: FC<{
  data: GatsbyTypes.ArticlesPageDataQuery;
  location: Location;
}> = props => {
  const { edges } = props.data.allMdx;

  return (
    <Layout aside={<ArticlesList />} location={props.location}>
      <ContentContainer title="Articles">
        <div>
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
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
      </ContentContainer>
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
