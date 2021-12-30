import React, { FC, useState } from "react";
import { graphql } from "gatsby";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Layout from "@components/layout";
import ProjectsList from "@components/left-pane/projects-list";
import ContentContainer from "@components/content";
import ProjectListItem from "@components/project-list-item";

const Row = ({
  data,
  index,
  style,
}: ListChildComponentProps<{ location: Location; edges: any }>) => {
  const { createdAt, name, description } = data.edges[index].node;

  return (
    <ProjectListItem
      date={createdAt.toLocaleLowerCase()}
      name={name!}
      title={name!}
      key={name!}
      description={description!}
      style={style}
    />
  );
};

const ProjectsPage: FC<{
  data: GatsbyTypes.GitHubProjectsListPageDataQuery;
  location: Location;
}> = props => {
  const { edges } = props.data.allGithubData.edges[0]?.node.data?.search!;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <Layout
      aside={<ProjectsList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title="Projects" displayShadow={shouldDisplayShadow}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={edges!.length}
              itemData={{ location, edges }}
              itemSize={110}
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
  query GitHubProjectsListPageData {
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
`;

export default ProjectsPage;
