import React, { FC } from "react";

import Layout from "@components/layout";

const ProjectsPage: FC<{ location: Location }> = props => {
  return (
    <Layout location={props.location}>
      <main>
        <h2>Projects</h2>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
