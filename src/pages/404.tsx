import React, { FC, useState } from "react";

import ContentContainer from "@components/content";
import styled from "@emotion/styled";
import { graphql, HeadFC } from "gatsby";
import SEO from "@components/seo";

const NotFoundPage: FC = () => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer
      title="404 - Not found"
      displayShadow={shouldDisplayShadow}
    >
      <ContentWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        <p>The page you requested not found.</p>
      </ContentWrapper>
    </ContentContainer>
  );
};

export const query = graphql`
  query Page404Data {
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
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

export default NotFoundPage;

export const Head: HeadFC<GatsbyTypes.Page404DataQuery> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;

  return (
    <SEO
      title={`404 | ${siteMetadata.title}`}
      description={siteMetadata.description}
      keywords={siteMetadata.keywords}
      author={siteMetadata.author}
    />
  );
};
