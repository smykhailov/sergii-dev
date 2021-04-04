import React, { FC } from "react";

import Layout from "@components/layout";
import ContentContainer from "@components/content";

const CVPage: FC<{ location: Location }> = props => {
  return (
    <Layout location={props.location}>
      <ContentContainer title="CV"></ContentContainer>
    </Layout>
  );
};

export default CVPage;
