import React, { FC, useState } from "react";

import { graphql, HeadFC } from "gatsby";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import CategoriesList from "./left-pane/categories-list";
import ContentContainer from "./content";
import ArticleListItem from "./article-list-item";
import SEO from "./seo";

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
    <ContentContainer
      title={props.pageContext.category}
      displayShadow={shouldDisplayShadow}
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={edges.length}
            itemData={{ location: props.location, edges }}
            itemSize={154}
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
  query CategoryArticlesByCategory($category: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
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

(Category as any).Aside = CategoriesList;

export default Category;

export const Head: HeadFC<
  GatsbyTypes.CategoryArticlesByCategoryQuery,
  { category: string }
> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  return (
    <SEO
      title={`Category | ${props.pageContext.category}`}
      author={siteMetadata.author}
      keywords={props.pageContext.category}
      description={props.pageContext.category}
    />
  );
};
