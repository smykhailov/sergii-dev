import React, { FC, useState } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentContainer from "@components/content";
import styled from "@emotion/styled";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = props => {
  const { body } = props.data.mdx!;
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
        <MDXRenderer>{body}</MDXRenderer>
      </ContentWrapper>
    </ContentContainer>
  );
};

export const query = graphql`
  query HomePageData {
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
