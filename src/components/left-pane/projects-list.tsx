import React, { FC } from "react";
import slugify from "slugify";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";
import { graphql, Link, useStaticQuery } from "gatsby";

const ProjectsList: FC<{}> = () => {
  const { edges } = useGitHubProjectsListQuery();

  return (
    <LeftPaneContainer title="Projects">
      <Projects>
        {edges.map(e => {
          return e.node.data?.search?.edges!.map(item => (
            <li>
              <Link
                to={`/projects/${slugify(
                  item?.node?.name!
                ).toLocaleLowerCase()}`}
              >
                <strong>{item?.node?.name}</strong>
                <p>{item?.node?.description}</p>
              </Link>
            </li>
          ));
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
    color: props.theme.colors.textActiveColor,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "& > li > a:hover": {
    backgroundColor: props.theme.colors.leftPane.backgroundColorHover,
    color: props.theme.colors.textActiveColor,
    textDecoration: "none",
    cursor: "pointer",
  },

  "& > li > a.active": {
    backgroundColor: props.theme.colors.leftPane.backgroundColor,
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
