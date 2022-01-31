import React, { FC, useState } from "react";
import styled from "@emotion/styled";

import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ArticlesList from "@components/left-pane/articles-list";
import ContentContainer from "./content";
import Comments from "./comments";
import { formatDate } from "@core/date";
import slugify from "slugify";

const Article: FC<{
  data: GatsbyTypes.ArticleByIdQuery;
  location: Location;
}> = props => {
  const { frontmatter, body } = props.data.mdx!;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer
      title={frontmatter?.title!}
      displayShadow={shouldDisplayShadow}
    >
      <ContentWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        <header>
          <h1>{frontmatter?.title}</h1>
          <SubtitleContainer>
            <p>
              Posted on <strong>{formatDate(frontmatter?.date!)}</strong> -{" "}
              {props.data.mdx?.fields?.readingTime?.text}
            </p>
            <p>
              {frontmatter?.tags?.map(tag => (
                <Link
                  key={tag}
                  to={`/tags/${slugify(tag as string).toLocaleLowerCase()}`}
                >{`#${tag}`}</Link>
              ))}
            </p>
          </SubtitleContainer>
        </header>
        <main>
          <MDXRenderer>{body}</MDXRenderer>
        </main>
        <Comments
          slug={props.data.mdx?.fields?.slug!}
          title={frontmatter?.title!}
        />
      </ContentWrapper>
    </ContentContainer>
  );
};

(Article as any).Aside = ArticlesList;

export const query = graphql`
  query ArticleById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        tags
      }
      fields {
        slug
        readingTime {
          text
          minutes
          time
        }
      }
    }
  }
`;

const ContentWrapper = styled.div({
  padding: "6px 18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

const SubtitleContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",

  "& p": {
    display: "flex",
    flexWrap: "wrap",
    flexBasis: "fit-content",
    alignSelf: "flex-start",
    whiteSpace: "nowrap",
  },

  "& p:first-of-type": {
    display: "inline-block",
    whiteSpace: "nowrap",
  },

  "& * > a": {
    marginLeft: 12,
    opacity: 0.85,
  },

  "& * > a:hover": {
    opacity: 1,
    cursor: "pointer",
  },
});

export default Article;
