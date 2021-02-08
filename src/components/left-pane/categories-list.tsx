import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const CategoriesList: FC<{}> = () => {
  const { edges } = useCategoriesListQuery();

  return (
    <div>
      <ul>
        {edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.fields.slug}>
              <strong>{edge.node.frontmatter.title}</strong>
            </Link>
            <p>{new Date(edge.node.frontmatter.date).toLocaleDateString()}</p>
            <p>{edge.node.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

type TData = {
  allMdx: {
    edges: Array<{
      node: {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
        };
        fields: {
          slug: string;
        };
      };
    }>;
  };
};

export const useCategoriesListQuery = () => {
  const { allMdx } = useStaticQuery<TData>(graphql`
    query CategoriesListQuery {
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

export default CategoriesList;
