import React, { FC, useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";
import { isRouteActive } from "@core/routing";

const CategoriesList: FC<{ location: Location }> = props => {
  const { distinct: categories, group } = useCategoriesListQuery();
  const [offsetTop, setOffsetTop] = useState(0);
  const activeLi = React.useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOffsetTop(activeLi?.current?.offsetTop || 0);
  }, [activeLi]);

  return (
    <LeftPaneContainer title="Categories" offsetTop={offsetTop}>
      <Categories>
        {categories.map((category, idx) => {
          const slug = `/categories/${slugify(category).toLocaleLowerCase()}`;
          const articlesCount = group[idx]?.totalCount || 0;
          let amountOfArticles = "There are no articles in this category yet";

          if (articlesCount > 0) {
            if (articlesCount === 1) {
              amountOfArticles = "1 article";
            } else {
              amountOfArticles = `${articlesCount} articles`;
            }
          }

          const isActive = isRouteActive(slug, props.location);

          return (
            <li key={slug} ref={isActive ? activeLi : null}>
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
        })}
      </Categories>
    </LeftPaneContainer>
  );
};

const useCategoriesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.CategoriesListQuery>(graphql`
    query CategoriesList {
      allMdx(
        sort: { frontmatter: { categories: ASC } }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        distinct(field: { frontmatter: { categories: SELECT } })
        group(field: { frontmatter: { categories: SELECT } }) {
          totalCount
        }
      }
    }
  `);

  return allMdx;
};

const Categories = styled.ul(props => ({
  "& > li > a": {
    display: "flex",
    flexDirection: "column",
    color: props.theme.colors.leftPane.textColor,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    border: "solid 1px transparent",
  },
  "& > li > a:hover": {
    backgroundColor: props.theme.colors.leftPane.backgroundColorHover,
    border: props.theme.colors.borderHover,
    color: props.theme.colors.leftPane.textColorHover,
    textDecoration: "none",
    cursor: "pointer",
  },

  "& > li > a.active": {
    backgroundColor: props.theme.colors.leftPane.backgroundColorActive,
    border: props.theme.colors.borderActive,
    color: props.theme.colors.leftPane.textColorActive,
  },

  "& > li > a strong": {
    fontWeight: "bold",
  },

  "& > li > a span": {
    marginLeft: 16,
    fontSize: 11,
    opacity: 0.85,
  },

  "& > li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default CategoriesList;
