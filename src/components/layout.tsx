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
          {props.aside && <aside>{props.aside}</aside>}
          {props.children}
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

const globalStyles = css`
  ${emotionReset}

  html, *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Segoe WPC, Segoe UI, sans-serif;
    font-size: 13px;
    line-height: 1.4em;
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
