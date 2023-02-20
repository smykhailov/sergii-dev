import React, { FC, useState } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentContainer from "@components/content";
import styled from "@emotion/styled";
import SEO from "@components/seo";

const CVPage: FC<{
  data: GatsbyTypes.CVPageDataQuery;
  location: Location;
}> = props => {
  const { body } = props.data.mdx!;
  const siteMetadata = props.data.site?.siteMetadata!;
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
        <SEO
          title={`CV | ${siteMetadata.title}` || ""}
          author={siteMetadata.author || ""}
          description={siteMetadata.description || ""}
          keywords={siteMetadata.keywords || ""}
        />

        <MDXRenderer>{body}</MDXRenderer>
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
    mdx(fileAbsolutePath: { regex: "/resume.mdx/" }) {
      body
    }
  }
`;

const ContentWrapper = styled.div({
  padding: "6px 18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 73px)",
  overflow: "auto",
  marginTop: 12,
});

export default CVPage;
