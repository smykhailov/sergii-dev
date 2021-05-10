import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "@components/layout";
import CategoriesList from "@components/left-pane/categories-list";
import ContentContainer from "@components/content";

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
                <ArticleItemContainer>
                  <ArticleItemHeader>
                    <Link key={node.fields?.slug!} to={node.fields?.slug!}>
                      <h3>{node.frontmatter?.title}</h3>
                    </Link>
                  </ArticleItemHeader>
                  <ArticleItemBody>
                    <a href="/">#hello</a>
                    <a href="/">#react</a>
                    <a href="/">#web</a>
                  </ArticleItemBody>
                  <ArticleItemFooter>
                    <div>
                      <span>
                        {new Date(node.frontmatter?.date!).toLocaleDateString()}{" "}
                        - 10 min read
                      </span>
                    </div>
                    <div>
                      <a href="/">78 Comments</a>
                    </div>
                  </ArticleItemFooter>
                </ArticleItemContainer>
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

const CategoryGroup = styled.div({
  marginTop: 18,
  marginBottom: 6,

  "& h2": {
    margin: 0,
  },
});

const ArticleItemContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  margin: "9px 0",
  padding: "12px",
  backgroundColor: props.theme.colors.main.titleContainerBackgroundColor,

  ":hover": {
    backgroundColor: props.theme.colors.main.backgroundHoverColor,
  },
}));

const ArticleItemHeader = styled.div({
  display: "flex",

  "& h3": {
    margin: 0,
  },

  "& a": {
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
});

const ArticleItemBody = styled.div({
  display: "flex",
  margin: "12px 0",

  "& a": {
    marginRight: 12,
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
});

const ArticleItemFooter = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
});

export default CategoriesPage;
