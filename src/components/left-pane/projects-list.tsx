import React, { FC, useState } from "react";
import slugify from "slugify";
import styled from "@emotion/styled";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useTheme } from "@emotion/react";

import LeftPaneContainer from "./left-pane-container";
import { graphql, Link, useStaticQuery } from "gatsby";
import { isRouteActive } from "@core/routing";

const Row = ({
  data,
  index,
  style,
}: ListChildComponentProps<{ location: Location; edges: any }>) => {
  const item = data.edges[index];

  const slug = `/projects/${slugify(item?.node?.name!).toLocaleLowerCase()}`;

  const isActive = isRouteActive(slug, data.location);

  return (
    <li key={slug} style={style}>
      <Link
        to={slug}
        className={isActive ? "active" : undefined}
        title={item?.node?.name}
      >
        <strong>{item?.node?.name}</strong>
        <p>{item?.node?.description}</p>
      </Link>
    </li>
  );
};

const ProjectsList: FC<{ location: Location }> = () => {
  const { edges } = useGitHubProjectsListQuery();
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);
  const theme = useTheme();

  const data = edges[0]!.node.data?.search?.edges;

  return (
    <LeftPaneContainer title="Projects" displayShadow={shouldDisplayShadow}>
      <AutoSizer>
        {({ height, width }) => (
          <Projects>
            <List
              height={height}
              itemCount={data?.length || 0}
              itemData={{ location, edges: data }}
              itemSize={parseInt(theme.fontSize.toString(), 10) * 4}
              width={width}
              onScroll={e => setShouldDisplayShadow(e.scrollOffset > 0)}
            >
              {Row}
            </List>
          </Projects>
        )}
      </AutoSizer>
    </LeftPaneContainer>
  );
};

const useGitHubProjectsListQuery = () => {
  const { allGithubData } =
    useStaticQuery<GatsbyTypes.GitHubProjectsListQuery>(graphql`
      query GitHubProjectsList {
        allGithubData {
          edges {
            node {
              data {
                search {
                  edges {
                    node {
                      name
                      description
                      createdAt
                      object {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `);

  return allGithubData;
};

const Projects = styled.ul(props => ({
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
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default ProjectsList;
