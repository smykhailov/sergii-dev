import React, { FC, useState } from "react";
import ReactMarkdownWithHtml from "react-markdown";

import ProjectsList from "./left-pane/projects-list";
import ContentContainer from "./content";
import styled from "@emotion/styled";
import SEO from "./seo";

const Project: FC<{
  pageContext: {
    data: GatsbyTypes.GithubDataDataSearchEdgesNode;
  };
  location: Location;
}> = props => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer
      title={props.pageContext.data.name!}
      displayShadow={shouldDisplayShadow}
    >
      <ContentWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        <SEO
          title={props.pageContext.data.name || ""}
          author={"Sergii Mykhailov"}
          description={props.pageContext.data.description || ""}
          keywords={""}
        />

        <main>
          <ReactMarkdownWithHtml>
            {props.pageContext.data.object?.text!}
          </ReactMarkdownWithHtml>
        </main>
      </ContentWrapper>
    </ContentContainer>
  );
};

const ContentWrapper = styled.div({
  padding: "18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

(Project as any).Aside = ProjectsList;

export default Project;
