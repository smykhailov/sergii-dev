import React, { FC, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useTheme } from "@emotion/react";

import LeftPaneContainer from "./left-pane-container";
import { isRouteActive } from "@core/routing";

const Row = ({
  data,
  index,
  style,
}: ListChildComponentProps<{ location: Location; edges: any }>) => {
  const {
    id,
    excerpt,
    fields: { slug },
    frontmatter: { title, date },
  } = data.edges[index].node;

  const isActive = isRouteActive(slug, data.location);

  return (
    <li key={id} style={style}>
      <Link to={slug} className={isActive ? "active" : undefined} title={title}>
        <p>
          <strong>{title}</strong>
          <span>{new Date(date).toLocaleDateString()}</span>
        </p>
        <span>{excerpt}</span>
      </Link>
    </li>
  );
};

const ArticlesList: FC<{ location: Location }> = () => {
  const { edges } = useArticlesListQuery();
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);
  const theme = useTheme();

  return (
    <LeftPaneContainer title="Articles" displayShadow={shouldDisplayShadow}>
      <AutoSizer>
        {({ height }) => (
          <Articles>
            <List
              height={height}
              itemCount={edges.length}
              itemData={{ location, edges }}
              itemSize={parseInt(theme.fontSize.toString(), 10) * 4}
              width={320}
              onScroll={e => setShouldDisplayShadow(e.scrollOffset > 0)}
              innerElementType="ul"
            >
              {Row}
            </List>
          </Articles>
        )}
      </AutoSizer>
    </LeftPaneContainer>
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
            excerpt(pruneLength: 80)
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

const Articles = styled.div(props => ({
  "& li > a": {
    display: "flex",
    flexDirection: "column",
    color: props.theme.colors.leftPane.textColor,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    border: "solid 1px transparent",
  },
  "& li > a:hover": {
    backgroundColor: props.theme.colors.leftPane.backgroundColorHover,
    border: props.theme.colors.borderHover,
    color: props.theme.colors.leftPane.textColorHover,
    textDecoration: "none",
    cursor: "pointer",
  },

  "& li > a.active": {
    backgroundColor: props.theme.colors.leftPane.backgroundColorActive,
    border: props.theme.colors.borderActive,
    color: props.theme.colors.leftPane.textColorActive,
  },

  "& li > a strong": {
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  "& li > a > p > span": {
    marginLeft: 16,
    fontSize: 11,
    opacity: 0.85,
  },

  "& li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },

  "& li > a > span": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default ArticlesList;
