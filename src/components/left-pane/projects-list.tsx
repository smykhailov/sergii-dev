import React, { FC } from "react";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";

const ProjectsList: FC<{}> = () => {
  return (
    <LeftPaneContainer title="Projects">
      <Projects>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
      </Projects>
    </LeftPaneContainer>
  );
};

const Projects = styled.ul(() => ({
  lineHeight: "1.4em",
}));

export default ProjectsList;
