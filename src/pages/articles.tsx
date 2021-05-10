import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

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
            <ArticleItemContainer key={id}>
              <ArticleItemHeader>
                <Link to={slug}>
                  <h3>{title}</h3>
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
                    {new Date(date).toLocaleDateString()} - 10 min read
                  </span>
                </div>
                <div>
                  <a href="/">78 Comments</a>
                </div>
              </ArticleItemFooter>
            </ArticleItemContainer>
          );
        })}
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

export default ArticlesPage;
