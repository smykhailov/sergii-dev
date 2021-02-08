import React, { FC } from "react";

import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";

import Footer from "@components/footer";
import AppBar from "./app-bar";

const Layout: FC<{ aside?: React.ReactChild }> = props => {
  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Container>
        <AppBar />
        {props.aside && <aside>{props.aside}</aside>}
        {props.children}
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Container = styled.div({
  display: "flex",
});

const globalStyles = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

export default Layout;
