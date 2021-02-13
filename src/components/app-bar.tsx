import React from "react";
import { Link } from "gatsby";

import HomeIcon from "../assets/home.svg";
import ArticlesIcon from "../assets/files.svg";
import CategoriesIcon from "../assets/file-submodule.svg";
import ProjectsIcon from "../assets/source-control.svg";
import CVIcon from "../assets/person.svg";
import SettingsIcon from "../assets/settings-gear.svg";

const AppBar = () => {
  return (
    <nav>
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
        <li>
          <SettingsIcon />
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
