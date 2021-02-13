import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";

const CategoriesList: FC<{}> = () => {
  const { distinct: categories } = useCategoriesListQuery();

  return (
    <div>
      <ul>
        {categories.map(category => {
          const slug = `/categories/${slugify(category).toLocaleLowerCase()}`;

          return (
            <li key={slug}>
              <Link to={slug}>
                <strong>{category}</strong>
              </Link>
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
        distinct(field: frontmatter___category)
      }
    }
  `);

  return allMdx;
};

export default CategoriesList;
