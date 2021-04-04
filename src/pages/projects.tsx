import React, { FC } from "react";

import Layout from "@components/layout";
import ProjectsList from "@components/left-pane/projects-list";
import ContentContainer from "@components/content";

const ProjectsPage: FC<{ location: Location }> = props => {
  return (
    <Layout aside={<ProjectsList />} location={props.location}>
      <ContentContainer title="Projects"></ContentContainer>
    </Layout>
  );
};

export default ProjectsPage;
