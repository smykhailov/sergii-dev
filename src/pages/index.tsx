import React, { FC, useState } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentContainer from "@components/content";
import styled from "@emotion/styled";
import SEO from "@components/seo";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = props => {
  const { body } = props.data.mdx!;
  const siteMetadata = props.data.site?.siteMetadata!;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer
      title="Sergii Mykhailov"
      displayShadow={shouldDisplayShadow}
    >
      <ContentWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        <SEO
          title={`${siteMetadata.title} | ${siteMetadata.jobTitle}`}
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
  query HomePageData {
    site {
      siteMetadata {
        title
        author
        description
        keywords
        jobTitle
      }
    }
    mdx(fileAbsolutePath: { regex: "/main.mdx/" }) {
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

export default IndexPage;
