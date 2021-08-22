import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import Layout from "@components/layout";
import CategoriesList from "@components/left-pane/categories-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";

const CategoriesPage: FC<{
  data: GatsbyTypes.CategoriesPageDataQuery;
  location: Location;
}> = props => {
  return (
    <Layout aside={<CategoriesList />} location={props.location}>
      <ContentContainer title="Categories">
        {props.data.allMdx.group.map(group => {
          return (
            <React.Fragment key={group.fieldValue}>
              <CategoryGroup>
                <h2>{group.fieldValue!}</h2>
              </CategoryGroup>
              {group.nodes.slice(0, 3).map(node => (
                <ArticleListItem
                  id={node.id}
                  key={node.id}
                  slug={node.fields?.slug!}
                  title={node.frontmatter?.title!}
                  date={node.frontmatter?.date!}
                  timeToRead={node.fields?.readingTime?.text!}
                  tags={node.frontmatter?.tags}
                />
              ))}
            </React.Fragment>
          );
        })}
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query CategoriesPageData {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___categories) {
        fieldValue
        nodes {
          id
          fields {
            slug
            readingTime {
              text
              minutes
              time
            }
          }
          frontmatter {
            date
            title
            tags
          }
        }
      }
    }
  }
`;

const CategoryGroup = styled.div({
  marginTop: 18,
  marginBottom: 6,

  "& h2": {
    margin: 0,
  },
});

export default CategoriesPage;
