import React, { FC, useState } from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import TagsList from "@components/left-pane/tags-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";
import slugify from "slugify";
import SEO from "@components/seo";

const TagsPage: FC<{
  data: GatsbyTypes.CategoriesPageDataQuery;
  location: Location;
}> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer title="Tags" displayShadow={shouldDisplayShadow}>
      <TagsWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        <SEO
          title={`Tags | ${siteMetadata.title}` || ""}
          author={siteMetadata.author || ""}
          keywords={props.data.allMdx.group
            .map(group => group.fieldValue!)
            .join(", ")}
          description={`Tags | ${siteMetadata.title}` || ""}
        />
        {props.data.allMdx.group.map(group => {
          return (
            <React.Fragment key={group.fieldValue}>
              <TagsGroup>
                <h2>#{group.fieldValue!}</h2>
                <Link
                  to={`/tags/${slugify(group.fieldValue!).toLocaleLowerCase()}`}
                >
                  All articles with the tag
                </Link>
              </TagsGroup>
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
      </TagsWrapper>
    </ContentContainer>
  );
};

export const query = graphql`
  query TagsPageData {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___tags) {
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

const TagsWrapper = styled.div({
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
  marginTop: 18,
});

const TagsGroup = styled.div(props => ({
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

(TagsPage as any).Aside = TagsList;

export default TagsPage;
