import React, { FC, useState } from "react";

import { graphql } from "gatsby";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Layout from "./layout";
import CategoriesList from "./left-pane/categories-list";
import ContentContainer from "./content";
import ArticleListItem from "./article-list-item";

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

const Category: FC<{
  data: GatsbyTypes.CategoryArticlesByCategoryQuery;
  pageContext: {
    category: string;
  };
  location: Location;
}> = props => {
  const { edges } = props.data.allMdx;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <Layout
      aside={<CategoriesList location={props.location} />}
      location={props.location}
    >
      <ContentContainer
        title={props.pageContext.category}
        displayShadow={shouldDisplayShadow}
      >
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
    </Layout>
  );
};

export const query = graphql`
  query CategoryArticlesByCategory($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { eq: $category }, published: { eq: true } }
      }
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
            categories
            tags
          }
        }
      }
    }
  }
`;

export default Category;
