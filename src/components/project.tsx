import React, { FC, useState } from "react";
import ReactMarkdownWithHtml from "react-markdown";

import Layout from "./layout";
import ProjectsList from "./left-pane/projects-list";
import ContentContainer from "./content";
import styled from "@emotion/styled";

const Project: FC<{
  pageContext: {
    data: GatsbyTypes.GithubDataDataSearchEdgesNode;
  };
  location: Location;
}> = props => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <Layout
      aside={<ProjectsList location={props.location} />}
      location={props.location}
    >
      <ContentContainer
        title={props.pageContext.data.name!}
        displayShadow={shouldDisplayShadow}
      >
        <ContentWrapper
          onScroll={e =>
            setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
          }
        >
          <main>
            <ReactMarkdownWithHtml>
              {props.pageContext.data.object?.text!}
            </ReactMarkdownWithHtml>
          </main>
        </ContentWrapper>
      </ContentContainer>
    </Layout>
  );
};

const ContentWrapper = styled.div({
  padding: "6px 18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

export default Project;
