import React, { FC, useState } from "react";
import { graphql } from "gatsby";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
//import { useTheme } from "@emotion/react";

import Layout from "@components/layout";
import ArticlesList from "@components/left-pane/articles-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";

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
  // const theme = useTheme();

  return (
    <Layout
      aside={<ArticlesList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title="Articles" displayShadow={shouldDisplayShadow}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={edges.length}
              itemData={{ location, edges }}
              // itemSize={parseInt(theme.fontSize.toString(), 10) * 4}
              itemSize={134}
              width={width}
              onScroll={e => setShouldDisplayShadow(e.scrollOffset > 0)}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
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

export default ArticlesPage;
