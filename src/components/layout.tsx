import React, { FC } from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import AppBar from "./app-bar";
import PostList from "./left-pane/post-list";

const Layout: FC<{}> = (props) => {
  return (
    <div>
      <Header />
      <AppBar />
      <aside>
        <PostList />
      </aside>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
