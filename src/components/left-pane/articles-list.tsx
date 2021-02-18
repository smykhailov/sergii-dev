import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const ArticlesList: FC<{}> = () => {
  const { edges } = useArticlesListQuery();

  return (
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
                <strong>{title}</strong>
              </Link>
              <p>{new Date(date).toLocaleDateString()}</p>
              <p>{excerpt}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const useArticlesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.ArticlesListQuery>(graphql`
    query ArticlesList {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            slug
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return allMdx;
};

export default ArticlesList;
