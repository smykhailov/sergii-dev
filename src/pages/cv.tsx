import React, { FC, useState } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";

import ContentContainer from "@components/content";
import SEO from "@components/SEO";
import Resume from "../../content/resume.mdx";

const CVPage: FC<PageProps> = () => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer
      title="CV - Sergii Mykhailov"
      displayShadow={shouldDisplayShadow}
    >
      <ContentWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        <Resume />
      </ContentWrapper>
    </ContentContainer>
  );
};

export const query = graphql`
  query CVPageData {
    site {
      siteMetadata {
        title
        author
        description
        keywords
      }
    }
  }
`;

const ContentWrapper = styled.div({
  padding: "18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 73px)",
  overflow: "auto",
});

export default CVPage;

export const Head: HeadFC<GatsbyTypes.CVPageDataQuery> = props => (
  <SEO
    title={`CV | props.data.site?.siteMetadata?.title`}
    description={props.data.site?.siteMetadata?.description}
    keywords={props.data.site?.siteMetadata?.keywords}
    author={props.data.site?.siteMetadata?.author}
  />
);
