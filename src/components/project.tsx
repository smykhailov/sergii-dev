import React, { FC, useState } from "react";
import ReactMarkdownWithHtml from "react-markdown";

import ProjectsList from "./left-pane/projects-list";
import ContentContainer from "./content";
import styled from "@emotion/styled";
import SEO from "./seo";
import { HeadFC } from "gatsby";
import OpenExternalLinkIcon from "../assets/open-external-link.svg";

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
        <main>
          <OpenExternalLink>
            <a
              href={props.pageContext.data.url!}
              title={props.pageContext.data.name!}
            >
              <OpenExternalLinkIcon />
            </a>
          </OpenExternalLink>
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

const OpenExternalLink = styled.span({
  position: "absolute",
  top: 70,
  right: 20,
});

(Project as any).Aside = ProjectsList;

export default Project;

export const Head: HeadFC<
  GatsbyTypes.GitHubProjectsListPageDataQuery,
  { data: { name: string } }
> = props => {
  return (
    <SEO
      title={`Project | ${props.pageContext.data.name}`}
      author="Sergii Mykhailov"
      keywords={props.pageContext.data.name}
      description={props.pageContext.data.name}
    />
  );
};
