import React, { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const ContentContainer: FC<
  PropsWithChildren<{
    title: string;
    displayShadow?: boolean;
  }>
> = props => {
  const theme = useTheme();

  return (
    <ArticleContainer>
      <TitleContainer
        style={
          props.displayShadow
            ? { boxShadow: theme.colors.shadow, zIndex: 100 }
            : { zIndex: 100 }
        }
      >
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
  fontFamily: props.theme.fontFace,
  fontSize: props.theme.fontSize,
  fontWeight: 400,
  height: 35,
  borderBottom: props.theme.colors.border,
}));

const Title = styled.div(props => ({
  backgroundColor: props.theme.colors.main.titleBackgroundColor,
  display: "flex",
  alignItems: "center",
  borderRight: props.theme.colors.border,

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

  "& h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
    display: "none",
  },

  "& h1:hover > a, h2:hover > a, h3:hover > a, h4:hover > a, h5:hover > a, h6:hover > a":
    {
      display: "inline-block",
    },
}));

const Article = styled.article(() => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  // overflowY: "auto",
  // padding: "6px 18px",
}));

export default ContentContainer;
