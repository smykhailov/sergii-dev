import React, { FC, CSSProperties } from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";

const ProjectListItem: FC<{
  name: string;
  title: string;
  description: string;
  date: string;
  style?: CSSProperties;
}> = props => {
  return (
    <div style={{ ...props.style, padding: "6px 18px" }}>
      <ArticleItemContainer key={props.name}>
        <Link to={props.name}>
          <ArticleItemHeader>
            <h3>{props.title}</h3>
          </ArticleItemHeader>
          <ArticleItemBody>{props.description}</ArticleItemBody>
        </Link>
      </ArticleItemContainer>
    </div>
  );
};

const ArticleItemContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  margin: "9px 0",
  padding: "12px",
  backgroundColor: props.theme.colors.main.titleContainerBackgroundColor,

  ":hover": {
    backgroundColor: props.theme.colors.main.backgroundHoverColor,
  },
}));

const ArticleItemHeader = styled.div(props => ({
  display: "flex",

  "& h3": {
    margin: 0,
    color: props.theme.colors.textColor,
    opacity: 0.85,
  },

  "& h3:hover": {
    opacity: 1,
  },
}));

const ArticleItemBody = styled.div(props => ({
  display: "flex",
  margin: "12px 0",
  color: props.theme.colors.textColor,
}));

export default ProjectListItem;
