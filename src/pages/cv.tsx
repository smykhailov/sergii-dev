import React, { FC } from "react";

import Layout from "@components/layout";

const CVPage: FC<{ location: Location }> = props => {
  return (
    <Layout location={props.location}>
      <main>
        <h2>CV</h2>
      </main>
    </Layout>
  );
};

export default CVPage;
