import React, { FC } from "react";
import styled from "@emotion/styled";

const ContentContainer: FC<{
  title: string;
}> = props => {
  return (
    <ArticleContainer>
      <TitleContainer>
        <Title title={props.title}>
          <span>{props.title}</span>
        </Title>
      </TitleContainer>
      <Main>
        <Article>{props.children}</Article>
      </Main>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  // lineHeight: "1.4em",
  backgroundColor: props.theme.colors.main.backgroundColor,
}));

const TitleContainer = styled.div(props => ({
  display: "flex",
  backgroundColor: props.theme.colors.main.titleContainerBackgroundColor,
  fontFamily: "Segoe WPC, Segoe UI, sans-serif",
  fontSize: 13,
  height: 35,
}));

const Title = styled.div(props => ({
  backgroundColor: props.theme.colors.main.titleBackgroundColor,
  display: "flex",
  alignItems: "center",

  "& > span": {
    margin: "0 12px",
    maxWidth: 120,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    cursor: "pointer",
  },
}));

const Main = styled.main(() => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  height: 0,
}));

const Article = styled.article(() => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  overflowY: "auto",
  padding: "6px 18px",
  // lineHeight: "1.8em",
  // fontFamily: "consolas",
  // fontSize: "14px",
}));

export default ContentContainer;
