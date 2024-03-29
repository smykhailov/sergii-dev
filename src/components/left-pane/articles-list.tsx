import React, { FC, useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";
import { isRouteActive } from "@core/routing";

const ArticlesList: FC<{ location: Location }> = props => {
  const { edges } = useArticlesListQuery();
  const [offsetTop, setOffsetTop] = useState(0);
  const activeLi = React.useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOffsetTop(activeLi?.current?.offsetTop || 0);
  }, [activeLi]);

  return (
    <LeftPaneContainer title="Articles" offsetTop={offsetTop}>
      <Articles>
        {edges.map(edge => {
          if (!edge.node.fields?.slug || !edge.node.frontmatter?.date) {
            return null;
          }

          const {
            id,
            excerpt,
            fields: { slug },
            frontmatter: { title, date },
          } = edge.node;

          const isActive = isRouteActive(slug, props.location);

          return (
            <li key={id} ref={isActive ? activeLi : null}>
              <Link
                to={slug}
                className={isActive ? "active" : undefined}
                title={title!}
              >
                <p>
                  <strong>{title}</strong>
                  <span>{new Date(date).toLocaleDateString()}</span>
                </p>
                <span>{excerpt}</span>
              </Link>
            </li>
          );
        })}
      </Articles>
    </LeftPaneContainer>
  );
};

const useArticlesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.ArticlesListQuery>(graphql`
    query ArticlesList {
      allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
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

const Articles = styled.ul(props => ({
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
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  "& > li > a > p > span": {
    marginLeft: 16,
    fontSize: 11,
    opacity: 0.85,
  },

  "& > li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },

  "& > li > a > span": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default ArticlesList;
