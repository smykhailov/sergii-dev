import React, { FC, useState } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import ContentContainer from "@components/content";
import styled from "@emotion/styled";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = props => {
  const { title, description } = props.data.site?.siteMetadata!;
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <Layout location={props.location}>
      <ContentContainer title="Welcome" displayShadow={shouldDisplayShadow}>
        <ContentWrapper
          onScroll={e =>
            setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
          }
        >
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae ipsum omnis quos beatae suscipit! Dignissimos, quia dicta, a
            eum tempore quas veniam nostrum magnam, explicabo unde tempora
            consequatur libero.
          </p>
        </ContentWrapper>
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query HomePageData {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const ContentWrapper = styled.div({
  padding: "6px 18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

export default IndexPage;
