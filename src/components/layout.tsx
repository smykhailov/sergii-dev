import React, { FC, useEffect, useState } from "react";

import { Global, css, ThemeProvider, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import Footer from "@components/footer";
import AppBar from "@components/app-bar";
import { AppContext, defaultContextValue } from "./app-context";
import { fonts, getConfig } from "@core/config";

const Layout: FC<{ aside?: React.ReactChild; location: Location }> = props => {
  const [ctx, setContext] = useState(defaultContextValue);

  useEffect(() => {
    setContext({ ...ctx, config: getConfig() });
  }, []);

  return (
    <AppContext.Provider value={ctx}>
      <UILayout
        aside={props.aside}
        location={props.location}
        children={props.children}
      />
    </AppContext.Provider>
  );
};

const UILayout: FC<{ aside?: React.ReactChild; location: Location }> =
  props => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
      const config = getConfig();
      import(`../themes/${config.theme}`)
        .then(newTheme => {
          (newTheme.default as Theme).fontSize = `${config.editorFontSize}px`;
          (newTheme.default as Theme).fontFace = fonts[config.editorFontFace];
          (
            newTheme.default as Theme
          ).articleFontSize = `${config.articleFontSize}px`;
          (newTheme.default as Theme).articleFontFace =
            fonts[config.articleFontFace];
          setTheme(newTheme.default);
          console.info(`Theme has changed: ${config.theme}`);
        })
        .catch(err => console.error(`Can't load theme: ${config.theme}`, err));
    }, []);

    if (!theme) {
      return null;
    }

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Global styles={globalStyles(theme)} />
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

const Wrapper = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",

  "& ::selection": {
    background: props.theme.colors.selectionColor,
  },
  "& *:focus-visible": {
    outline: props.theme.colors.focusOutline,
  },
}));

const Container = styled.div({
  display: "flex",
  flex: 1,
});

const Aside = styled.aside(props => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "320px",
  minWidth: "300px",
  backgroundColor: props.theme.colors.backgroundSecondary,
  color: props.theme.colors.textColor,
  fontFamily: "Segoe WPC, Segoe UI, sans-serif",
  fontSize: props.theme.fontSize,
  fontWeight: 400,
  lineHeight: 22,

  WebkitTouchCallout: "none" /* iOS Safari */,
  WebkitUserSelect: "none" /* Safari */,
  KhtmlUserSelect: "none" /* Konqueror HTML */,
  MozUserSelect: "none" /* Old versions of Firefox */,
  MsUserSelect: "none" /* Internet Explorer/Edge */,
  userSelect: "none" /* Non-prefixed version, currently
          supported by Chrome, Edge, Opera and Firefox */,

  "& ul": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  "& ul li": {
    margin: 0,
    padding: 0,
  },

  "& ul li p": {
    margin: 0,
    padding: 0,
  },
}));

const Content = styled.div(props => ({
  display: "flex",
  flex: 1,
  backgroundColor: props.theme.colors.backgroundPrimary,
  color: props.theme.colors.textColor,

  "& a": {
    color: props.theme.colors.linkColor,
  },
}));

const globalStyles = (props: Theme) => css`
  html,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body > #___gatsby {
    font-family: ${props.articleFontFace};
    font-size: ${props.articleFontSize};
  }

  html {
    overflow: hidden;
  }

  a,
  a:hover,
  a:visited,
  a:focus,
  a:active {
    text-decoration: none;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-left: 1px solid ${props.colors.scrollBar.borderColor};
    border-top: 1px solid ${props.colors.scrollBar.borderColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props.colors.scrollBar.thumbBackgroundColor};
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props.colors.scrollBar.thumbBackgroundHoverColor};
  }
`;

export default Layout;
