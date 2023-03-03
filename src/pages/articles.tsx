import React, { FC, useState } from "react";
import { graphql, HeadFC } from "gatsby";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import ArticlesList from "@components/left-pane/articles-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";
import SEO from "@components/seo";

const Row = ({
  data,
  index,
  style,
}: ListChildComponentProps<{ location: Location; edges: any }>) => {
  const {
    id,
    fields: { slug, readingTime },
    frontmatter: { title, date, tags },
  } = data.edges[index].node;

  return (
    <ArticleListItem
      id={id}
      key={id}
      slug={slug!}
      title={title!}
      date={date!}
      timeToRead={readingTime?.text!}
      tags={tags}
      style={style}
    />
  );
};

const ArticlesPage: FC<{
  data: GatsbyTypes.ArticlesPageDataQuery;
  location: Location;
}> = props => {
  const { edges } = props.data.allMdx;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer title="Articles" displayShadow={shouldDisplayShadow}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={edges.length}
            itemData={{ location, edges }}
            itemSize={134}
            width={width}
            onScroll={e => setShouldDisplayShadow(e.scrollOffset > 0)}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </ContentContainer>
  );
};

export const query = graphql`
  query ArticlesPageData {
    site {
      siteMetadata {
        title
        author
        description
        keywords
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
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
            title
            date
            tags
          }
        }
      }
    }
  }
`;

(ArticlesPage as any).Aside = ArticlesList;

export default ArticlesPage;

export const Head: HeadFC<GatsbyTypes.ArticlesPageDataQuery> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  return (
    <SEO
      title={`Articles | ${siteMetadata.title}`}
      description={`Articles | ${siteMetadata.title}`}
      keywords={siteMetadata.keywords}
      author={siteMetadata.author}
    />
  );
};
