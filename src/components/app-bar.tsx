import { Link } from "gatsby";
import React from "react";

const AppBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
