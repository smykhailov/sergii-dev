import { useState } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import styled from "@emotion/styled";

import ContentContainer from "@components/content";
import Main from "../../content/main.mdx";
import SEO from "@components/seo";

const IndexPage: React.FC<PageProps> = () => {
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
        <Main />
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
  }
`;

const ContentWrapper = styled.div({
  padding: "18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 73px)",
  overflow: "auto",
});

export default IndexPage;

export const Head: HeadFC<GatsbyTypes.HomePageDataQuery> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  return (
    <SEO
      title={siteMetadata.title}
      description={siteMetadata.description}
      keywords={siteMetadata.keywords}
      author={siteMetadata.author}
    />
  );
};
