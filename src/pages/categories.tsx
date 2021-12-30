import React, { FC, useState } from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "@components/layout";
import CategoriesList from "@components/left-pane/categories-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";
import slugify from "slugify";

const CategoriesPage: FC<{
  data: GatsbyTypes.CategoriesPageDataQuery;
  location: Location;
}> = props => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <Layout
      aside={<CategoriesList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title="Categories" displayShadow={shouldDisplayShadow}>
        <CategoryWrapper
          onScroll={e =>
            setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
          }
        >
          {props.data.allMdx.group.map(group => {
            return (
              <React.Fragment key={group.fieldValue}>
                <CategoryGroup>
                  <h2>{group.fieldValue!}</h2>
                  <Link
                    to={`/categories/${slugify(
                      group.fieldValue!
                    ).toLocaleLowerCase()}`}
                  >
                    All articles in the category
                  </Link>
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
        </CategoryWrapper>
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

const CategoryWrapper = styled.div({
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

const CategoryGroup = styled.div(props => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 18,
  marginBottom: 6,
  margin: "0 18px 0 0",

  "& h2": {
    margin: "0 0 0 18px",
  },

  "& a": {
    color: props.theme.colors.linkColor,
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
}));

export default CategoriesPage;
