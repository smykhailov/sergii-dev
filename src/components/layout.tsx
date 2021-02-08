import React, { FC } from "react";

import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";

import Header from "@components/header";
import Footer from "@components/footer";
import AppBar from "./app-bar";
import PostList from "./left-pane/articles-list";

const Layout: FC<{}> = props => {
  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Header />
      <AppBar />
      <aside>
        <PostList />
      </aside>
      {props.children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border: 2px solid green;
  padding: 10px;
`;

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
