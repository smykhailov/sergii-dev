import React, { FC } from "react";
import styled from "@emotion/styled";

const LeftPaneContainer: FC<{
  title: string;
}> = props => {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  );
};

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

const TitleContainer = styled.div(() => ({
  height: 35,
  paddingLeft: 8,
  paddingRight: 8,
  lineHeight: "1.4em",
}));

const Title = styled.h3(() => ({
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "uppercase",
  fontSize: 13,
  lineHeight: "35px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const ContentContainer = styled.div(() => ({
  lineHeight: "1.4em",
  height: "100%",
}));

export default LeftPaneContainer;
