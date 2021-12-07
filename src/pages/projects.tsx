import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import ProjectsList from "@components/left-pane/projects-list";
import ContentContainer from "@components/content";
import ProjectListItem from "@components/project-list-item";

const ProjectsPage: FC<{
  data: GatsbyTypes.GitHubProjectsListPageDataQuery;
  location: Location;
}> = props => {
  const { edges } = props.data.allGithubData.edges[0]?.node.data?.search!;

  return (
    <Layout
      aside={<ProjectsList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title="Projects">
        {edges?.map(item => {
          return (
            <ProjectListItem
              date={item!.node!.createdAt!.toLocaleLowerCase()}
              name={item?.node?.name!}
              title={item?.node?.name!}
              key={item?.node?.name!}
              description={item?.node?.description!}
            />
          );
        })}
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
