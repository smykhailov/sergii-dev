import Header from "@components/header";
import Footer from "@components/footer";
import React, { FC } from "react";

const Layout: FC<{}> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
