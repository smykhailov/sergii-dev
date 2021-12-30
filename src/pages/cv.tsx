import React, { FC, useState } from "react";

import Layout from "@components/layout";
import ContentContainer from "@components/content";
import styled from "@emotion/styled";

const CVPage: FC<{ location: Location }> = props => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <Layout location={props.location}>
      <ContentContainer
        title="CV - Sergii Mykhailov"
        displayShadow={shouldDisplayShadow}
      >
        <ContentWrapper
          onScroll={e =>
            setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
          }
        >
          <p>TODO: Add CV</p>
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

const ContentWrapper = styled.div({
  padding: "6px 18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
});

export default CVPage;
