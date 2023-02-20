import React, { FC, useState } from "react";

import ContentContainer from "@components/content";
import styled from "@emotion/styled";

const NotFoundPage: FC<{}> = () => {
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

const ContentWrapper = styled.div({
  padding: "6px 18px",
  flex: "1 1 auto",
  maxHeight: "calc(100vh - 73px)",
  overflow: "auto",
  marginTop: 12,
});

export default NotFoundPage;
