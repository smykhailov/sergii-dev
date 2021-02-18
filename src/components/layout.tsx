import React, { FC } from "react";

import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";

import { oneMonokaiTheme } from "@themes/one-monokai";

import Footer from "@components/footer";
import AppBar from "@components/app-bar";

const theme = oneMonokaiTheme;

const Layout: FC<{ aside?: React.ReactChild; location: Location }> = props => {
  return (
    <ThemeProvider theme={oneMonokaiTheme}>
      <Wrapper>
        <Global styles={globalStyles} />
        <Container>
          <AppBar location={props.location} />
          {props.aside && <Aside>{props.aside}</Aside>}
          <Content>{props.children}</Content>
        </Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const Container = styled.div({
  display: "flex",
  flex: 1,
});

const Aside = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "320px",
  backgroundColor: props.theme.colors.backgroundSecondary,
  color: props.theme.colors.textColor,
  lineHeight: "22px",
}));

const Content = styled.div(props => ({
  display: "flex",
  flex: 1,
  backgroundColor: props.theme.colors.backgroundPrimary,
  color: props.theme.colors.textColor,
  lineHeight: "22px",
}));

const globalStyles = css`
  ${emotionReset}

  html, *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Segoe WPC, Segoe UI, sans-serif;
    font-size: 13px;
  }

  a,
  a:hover,
  a:visited,
  a:focus,
  a:active {
    text-decoration: none;
    outline: 0;
  }

  a:hover,
  a:active {
    text-decoration: underline;
    outline: 0;
    color: ${theme.colors.textActiveColor};
  }
`;

export default Layout;
