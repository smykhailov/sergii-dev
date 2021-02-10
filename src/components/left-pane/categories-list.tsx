import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const CategoriesList: FC<{}> = () => {
  const { edges } = useCategoriesListQuery();

  return (
    <div>
      <ul>
        {edges.map(edge => {
          if (!edge.node.fields?.slug || !edge.node.frontmatter?.date) {
            return null;
          }

          const {
            id,
            fields: { slug },
            frontmatter: { title, date },
          } = edge.node;

          return (
            <li key={id}>
              <Link to={slug}>
                <strong>{title}</strong>
              </Link>
              <p>{new Date(date).toLocaleDateString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const useCategoriesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.CategoriesListQuery>(graphql`
    query CategoriesList {
      allMdx(
        sort: { fields: [frontmatter___category], order: ASC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              category
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
