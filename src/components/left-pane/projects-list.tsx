import React, { FC } from "react";
import slugify from "slugify";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";
import { graphql, Link, useStaticQuery } from "gatsby";
import { isRouteActive } from "@core/routing";

const ProjectsList: FC<{ location: Location }> = props => {
  const { edges } = useGitHubProjectsListQuery();

  return (
    <LeftPaneContainer title="Projects">
      <Projects>
        {edges.map(e => {
          return e.node.data?.search?.edges!.map(item => {
            const slug = `/projects/${slugify(
              item?.node?.name!
            ).toLocaleLowerCase()}`;

            const isActive = isRouteActive(slug, props.location);

            return (
              <li key={slug}>
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
          });
        })}
      </Projects>
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

export default ProjectsList;
