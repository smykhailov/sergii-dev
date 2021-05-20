import React, { FC } from "react";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";

const ProjectsList: FC<{}> = () => {
  return (
    <LeftPaneContainer title="Projects">
      <Projects>
        <li>
          <a href="/">
            <strong>Project 1</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <strong>Project 2</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <strong>Project 3</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <strong>Project 4</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <strong>Project 5</strong>
          </a>
        </li>
      </Projects>
    </LeftPaneContainer>
  );
};

const Projects = styled.ul(props => ({
  "& > li > a": {
    display: "flex",
    flexDirection: "column",
    color: props.theme.colors.textActiveColor,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "& > li > a:hover": {
    backgroundColor: props.theme.colors.leftPane.backgroundColorHover,
    color: props.theme.colors.textActiveColor,
    textDecoration: "none",
    cursor: "pointer",
  },

  "& > li > a.active": {
    backgroundColor: props.theme.colors.leftPane.backgroundColor,
  },

  "& > li > a strong": {
    fontWeight: "bold",
  },

  "& > li > a span": {
    marginLeft: 16,
    fontSize: 11,
    opacity: 0.85,
  },

  "& > li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default ProjectsList;
