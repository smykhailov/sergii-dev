import React, { FC } from "react";

import Layout from "@components/layout";
import CategoriesList from "@components/left-pane/categories-list";
import { graphql, Link } from "gatsby";
import slugify from "slugify";

const CategoriesPage: FC<{
  data: GatsbyTypes.CategoriesPageDataQuery;
}> = props => {
  return (
    <Layout aside={<CategoriesList />}>
      <main>
        <h2>Categories</h2>

        {props.data.allMdx.group.map(group => {
          return (
            <>
              <Link
                to={`/categories/${slugify(
                  group.fieldValue!
                ).toLocaleLowerCase()}`}
              >
                <h3>{group.fieldValue!}</h3>
              </Link>
              {group.nodes.slice(0, 3).map(node => (
                <Link key={node.fields?.slug!} to={node.fields?.slug!}>
                  <h4>{node.frontmatter?.title}</h4>
                  <p>{node.excerpt}</p>
                </Link>
              ))}
              <hr />
            </>
          );
        })}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query CategoriesPageData {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        nodes {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`;

export default CategoriesPage;
