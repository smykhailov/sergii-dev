import React, { FC } from "react";

import Layout from "@components/layout";
import ProjectsList from "@components/left-pane/projects-list";

const ProjectsPage: FC<{ location: Location }> = props => {
  return (
    <Layout aside={<ProjectsList />} location={props.location}>
      <main>
        <h2>Projects</h2>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
