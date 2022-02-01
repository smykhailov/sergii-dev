import React from "react";
import Layout from "./src/components/layout";

export function wrapPageElement({ element, props }) {
  const { Aside } = props.pageResources.component;

  if (Aside) {
    return (
      <Layout {...props} aside={<Aside location={props.location} />}>
        {element}
      </Layout>
    );
  } else {
    return <Layout {...props}>{element}</Layout>;
  }
}
