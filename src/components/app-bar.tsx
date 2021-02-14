import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import HomeIcon from "../assets/home.svg";
import ArticlesIcon from "../assets/files.svg";
import CategoriesIcon from "../assets/file-submodule.svg";
import ProjectsIcon from "../assets/source-control.svg";
import CVIcon from "../assets/person.svg";
import SettingsIcon from "../assets/settings-gear.svg";

const AppBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <ArticlesIcon />
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <CategoriesIcon />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <ProjectsIcon />
          </Link>
        </li>
        <li>
          <Link to="/cv">
            <CVIcon />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <SettingsIcon />
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav(props => ({
  display: "flex",
  backgroundColor: props.theme.colors.backgroundPrimary,
  flexDirection: "column",
  flexBasis: "48px",
  justifyContent: "space-between",

  "& a, & svg": {
    height: 32,
    width: 32,
    margin: 4,
  },
}));

export default AppBar;
