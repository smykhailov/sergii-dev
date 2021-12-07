import React, { FC } from "react";
import ReactMarkdownWithHtml from "react-markdown";

import Layout from "./layout";
import ProjectsList from "./left-pane/projects-list";
import ContentContainer from "./content";

const Project: FC<{
  pageContext: {
    data: GatsbyTypes.GithubDataDataSearchEdgesNode;
  };
  location: Location;
}> = props => {
  return (
    <Layout
      aside={<ProjectsList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title={props.pageContext.data.name!}>
        <main>
          <ReactMarkdownWithHtml>
            {props.pageContext.data.object?.text!}
          </ReactMarkdownWithHtml>
        </main>
      </ContentContainer>
    </Layout>
  );
};

export default Project;
