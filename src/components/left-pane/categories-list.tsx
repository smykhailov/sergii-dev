import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";

const CategoriesList: FC<{}> = () => {
  const categories = useCategories();

  return (
    <div>
      <ul>
        {categories.map(category => {
          return (
            <li key={category.slug}>
              <Link to={category.slug}>
                <strong>{category.title}</strong>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type TCategory = {
  slug: string;
  title: string;
};

const useCategories = (): TCategory[] => {
  const { edges } = useCategoriesListQuery();

  const categories = edges
    .filter((item, idx, arr) => {
      return (
        arr.findIndex(
          x => x.node.frontmatter?.category === item.node.frontmatter?.category
        ) === idx
      );
    })
    .map(edge => {
      let slug = slugify(edge.node.frontmatter?.category!).toLocaleLowerCase();
      let title = edge.node.frontmatter?.category!;

      return {
        slug,
        title,
      };
    });

  return categories;
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
