import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

const ArticlesList: FC<{}> = () => {
  const { edges } = useArticlesListQuery();

  return (
    <Container>
      <TitleContainer>
        <Title>Articles</Title>
      </TitleContainer>
      <ContentContainer>
        <Articles>
          {edges.map(edge => {
            if (!edge.node.fields?.slug || !edge.node.frontmatter?.date) {
              return null;
            }

            const {
              id,
              excerpt,
              fields: { slug },
              frontmatter: { title, date },
            } = edge.node;

            return (
              <li key={id}>
                <Link to={slug} activeClassName="active">
                  <p>
                    <strong>{title}</strong>
                    <span>{new Date(date).toLocaleDateString()}</span>
                  </p>
                  <p>{excerpt}</p>
                </Link>
              </li>
            );
          })}
        </Articles>
      </ContentContainer>
    </Container>
  );
};

const useArticlesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.ArticlesListQuery>(graphql`
    query ArticlesList {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            slug
            excerpt(pruneLength: 250)
            frontmatter {
              title
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

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

const TitleContainer = styled.div(() => ({
  height: 35,
  paddingLeft: 8,
  paddingRight: 8,
  lineHeight: "1.4em",
}));

const Title = styled.h3(() => ({
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "uppercase",
  fontSize: 13,
  lineHeight: "35px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const ContentContainer = styled.div(() => ({
  lineHeight: "1.4em",
  height: "100%",
}));

const Articles = styled.ul(props => ({
  lineHeight: "1.4em",

  "& > li > a": {
    display: "flex",
    flexDirection: "column",
    color: props.theme.colors.textActiveColor,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "& > li > a:hover": {
    color: props.theme.colors.textActiveColor,
    textDecoration: "none",
    cursor: "pointer",
  },

  "& > li > a.active": {
    backgroundColor: props.theme.colors.leftPane.backgroundColor,
  },

  "& > li > a strong": {
    fontWeight: "bold",
  },

  "& > li > a span": {
    fontSize: 11,
  },

  "& > li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default ArticlesList;
