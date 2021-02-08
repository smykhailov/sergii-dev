import { Link } from "gatsby";
import React from "react";

const AppBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
