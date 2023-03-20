import React, { FC, PropsWithChildren, useState } from "react";
import styled from "@emotion/styled";

import { graphql, HeadFC, Link } from "gatsby";

import ArticlesList from "@components/left-pane/articles-list";
import ContentContainer from "./content";
import Comments from "./comments";
import { formatDate } from "@core/date";
import slugify from "slugify";
import SEO from "./seo";
import ShareButtons from "./common/share-button";

const Article: FC<
  PropsWithChildren<{
    data: GatsbyTypes.ArticleByIdQuery;
    location: Location;
  }>
> = props => {
  const { frontmatter, excerpt } = props.data.mdx!;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

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
          <Title>
            <h1>{frontmatter?.title}</h1>
            <ShareButtons
              url={url}
              title={frontmatter?.title!}
              description={excerpt!}
            />
          </Title>
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
        <main>{props.children}</main>
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
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }) {
      excerpt
      body
      frontmatter {
        title
        date
        tags
        keywords
      }
      internal {
        contentFilePath
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
  padding: "18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

const Title = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",

  "& .post-meta-share-icons": { marginBottom: "0.3332rem", lineHeight: 2 },

  "& button": {
    marginLeft: "0.5rem",
  },
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

export const Head: HeadFC<GatsbyTypes.ArticleByIdQuery> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  const { frontmatter, excerpt } = props.data.mdx!;
  return (
    <SEO
      title={frontmatter?.title}
      author={siteMetadata.author}
      description={excerpt}
      keywords={frontmatter?.keywords?.map(k => k).join(", ") || ""}
    />
  );
};
