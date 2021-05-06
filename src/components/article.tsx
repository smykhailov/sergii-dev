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
        <ArticleContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </ArticleContainer>
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
    }
  }
`;

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",

  // "& > h1": {
  //   fontWeight: "bold",
  //   fontSize: "150%",
  //   marginTop: "0.2em",
  //   marginBottom: "0.6em",
  // },
  // "& > span": {},
});

const ArticleContainer = styled.main({
  // lineHeight: "1.8em",
  // fontFamily: "consolas",
  // fontSize: "14px",
  // "& p": {
  //   marginTop: "1.8em",
  //   marginBottom: "1.8em",
  // },
  // "& strong": {
  //   fontWeight: "bold",
  // },
  // "& h1": {
  //   fontWeight: "bold",
  //   fontSize: "150%",
  //   marginTop: "0.2em",
  //   marginBottom: "0.6em",
  // },
  // "& h2": {
  //   fontWeight: "bold",
  //   fontSize: "140%",
  //   marginTop: "0.15em",
  //   marginBottom: "0.5em",
  // },
  // "& h3": {
  //   fontWeight: "bold",
  //   fontSize: "130%",
  //   marginTop: "0.1em",
  //   marginBottom: "0.4em",
  // },
  // "& h4": {
  //   fontWeight: "bold",
  //   fontSize: "120%",
  //   marginTop: "0.2em",
  //   marginBottom: "0.6em",
  // },
  // "& h5": {
  //   fontWeight: "bold",
  //   fontSize: "110%",
  //   marginTop: "0.2em",
  //   marginBottom: "0.6em",
  // },
  // "& h6": {
  //   fontWeight: "bold",
  //   fontSize: "105%",
  //   marginTop: "0.2em",
  //   marginBottom: "0.6em",
  // },
});

export default Article;
