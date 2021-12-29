import React, { FC } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const LeftPaneContainer: FC<{
  title: string;
  displayShadow?: boolean;
}> = props => {
  const theme = useTheme();

  return (
    <Container>
      <TitleContainer
        style={
          props.displayShadow
            ? { boxShadow: theme.colors.shadow, zIndex: 100 }
            : { zIndex: 100 }
        }
      >
        <Title>{props.title}</Title>
      </TitleContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  );
};

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.4em",
}));

const TitleContainer = styled.div(props => ({
  height: 35,
  paddingLeft: 8,
  paddingRight: 8,
  borderBottom: props.theme.colors.border,
}));

const Title = styled.h3(() => ({
  lineHeight: "35px",
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "uppercase",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const ContentContainer = styled.div(() => ({
  // maxHeight: "calc(100vh - 60px)",
  height: "calc(100vh - 60px)",
  // overflowY: "auto",
}));

export default LeftPaneContainer;
