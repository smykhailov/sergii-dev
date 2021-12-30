import React, { FC, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";
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
}: ListChildComponentProps<{
  location: Location;
  categories: any;
  group: any;
}>) => {
  const category = data.categories[index];

  const slug = `/categories/${slugify(category).toLocaleLowerCase()}`;
  const articlesCount = data.group[index]?.totalCount || 0;
  let amountOfArticles = "There are no articles in this category yet";

  if (articlesCount > 0) {
    if (articlesCount === 1) {
      amountOfArticles = "1 article";
    } else {
      amountOfArticles = `${articlesCount} articles`;
    }
  }

  const isActive = isRouteActive(slug, data.location);

  return (
    <li key={slug} style={style}>
      <Link
        to={slug}
        className={isActive ? "active" : undefined}
        title={category}
      >
        <p>
          <strong>{category}</strong>
        </p>
        <p>{amountOfArticles}</p>
      </Link>
    </li>
  );
};

const CategoriesList: FC<{ location: Location }> = () => {
  const { distinct: categories, group } = useCategoriesListQuery();
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);
  const theme = useTheme();

  return (
    <LeftPaneContainer title="Categories" displayShadow={shouldDisplayShadow}>
      <AutoSizer>
        {({ height }) => (
          <Categories>
            <List
              height={height}
              itemCount={categories.length}
              itemData={{ location, categories, group }}
              itemSize={parseInt(theme.fontSize.toString(), 10) * 4}
              width={320}
              onScroll={e => setShouldDisplayShadow(e.scrollOffset > 0)}
              innerElementType="ul"
            >
              {Row}
            </List>
          </Categories>
        )}
      </AutoSizer>
    </LeftPaneContainer>
  );
};

const useCategoriesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.CategoriesListQuery>(graphql`
    query CategoriesList {
      allMdx(
        sort: { fields: [frontmatter___categories], order: ASC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        distinct(field: frontmatter___categories)
        group(field: frontmatter___categories) {
          totalCount
        }
      }
    }
  `);

  return allMdx;
};

const Categories = styled.div(props => ({
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
  },

  "& li > a span": {
    marginLeft: 16,
    fontSize: 11,
    opacity: 0.85,
  },

  "& li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default CategoriesList;
