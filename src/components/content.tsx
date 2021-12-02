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
  backgroundColor: props.theme.colors.main.backgroundColor,
}));

const TitleContainer = styled.div(props => ({
  display: "flex",
  backgroundColor: props.theme.colors.main.titleContainerBackgroundColor,
  fontFamily: "Segoe WPC, Segoe UI, sans-serif",
  fontSize: props.theme.fontSize,
  fontWeight: 400,
  height: 35,
  // TODO: Add the shadow onScroll
  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 0) {
  //       $("#header").addClass("active");
  //   }
  //   else {
  //       $("#header").removeClass("active");
  //   }
  // });
  // boxShadow: "0 4px 5px -2px black",
}));

const Title = styled.div(props => ({
  backgroundColor: props.theme.colors.main.titleBackgroundColor,
  display: "flex",
  alignItems: "center",

  "& > span": {
    margin: "0 12px",
    maxWidth: 160,
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
}));

export default ContentContainer;
