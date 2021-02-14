import React, { FC } from "react";
import Layout from "@components/layout";

const NotFoundPage: FC<{ location: Location }> = props => {
  return (
    <Layout location={props.location}>
      <main>
        <title>Not found</title>
        <h1>Page not found</h1>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
