import React, { FC } from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./layout";
import ArticlesList from "./left-pane/articles-list";
import ContentContainer from "./content";
import styled from "@emotion/styled";

const Article: FC<{
  data: GatsbyTypes.ArticleByIdQuery;
  location: Location;
}> = props => {
  const { frontmatter, body } = props.data.mdx!;
  return (
    <Layout aside={<ArticlesList />} location={props.location}>
      <ContentContainer title={frontmatter?.title!}>
        <HeaderContainer>
          <h1>{frontmatter?.title}</h1>
          <span>{new Date(frontmatter?.date!).toLocaleString()}</span>
        </HeaderContainer>
        <p>{props.data.mdx?.fields?.readingTime?.text}</p>
        <main>
          <MDXRenderer>{body}</MDXRenderer>
        </main>
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query ArticleById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
      }
      fields {
        readingTime {
          text
          minutes
          time
        }
      }
    }
  }
`;

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
});

export default Article;
