import React, { FC } from "react";
import styled from "@emotion/styled";

import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./layout";
import ArticlesList from "./left-pane/articles-list";
import ContentContainer from "./content";
import Comments from "./comments";
import { formatDate } from "@core/date";
import slugify from "slugify";

const Article: FC<{
  data: GatsbyTypes.ArticleByIdQuery;
  location: Location;
}> = props => {
  const { frontmatter, body } = props.data.mdx!;
  return (
    <Layout
      aside={<ArticlesList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title={frontmatter?.title!}>
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

const SubtitleContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",

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
