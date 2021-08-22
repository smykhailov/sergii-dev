import { FC } from "react";
import styled from "@emotion/styled";
import Gitalk from "gatsby-plugin-gitalk";
import "@suziwen/gitalk/dist/gitalk.css";

const Comments: FC<{ slug: string; title: string }> = props => {
  let gitalkConfig = {
    id: props.slug,
    title: props.title,
  };
  return (
    <CommentsContainer>
      <Gitalk options={gitalkConfig} />
    </CommentsContainer>
  );
};

const CommentsContainer = styled.div(props => ({
  ".gt-container .gt-svg": {
    verticalAlign: "text-top",
  },

  ".gt-container .gt-link": {
    color: `${props.theme.colors.gitalk.linkColor} !important`,
    textDecoration: "none",
    borderBottom: "none",
  },

  ".gt-container .gt-popup": {
    backgroundColor: props.theme.colors.gitalk.popupBackgroundColor,
    border: "none",
    padding: 0,
    fontSize: "13px",
  },

  ".gt-container .gt-action:hover": {
    backgroundColor: props.theme.colors.gitalk.popupItemHoverColor,
  },

  ".gt-container .gt-copyright": {
    borderTop: "none",
    paddingTop: 0,
    margin: 0,
    padding: "0 1.125em 0",
    marginBottom: "0.5em",
  },

  ".gt-container .gt-copyright:hover": {
    backgroundColor: props.theme.colors.gitalk.popupItemHoverColor,
  },

  ".gt-container .gt-comment-content": {
    padding: 0,
  },

  ".gt-container .gt-comment-content:hover": {
    boxShadow: "none",
  },

  ".gt-container .gt-comment-admin .gt-comment-content": {
    backgroundColor: "transparent",
  },

  ".gt-container .gt-comment-body": {
    color: `${props.theme.colors.textActiveColor} !important`,
  },

  ".gt-container .gt-comment-reply svg, .gt-container .gt-header-controls-tip svg, .gt-container .gt-user .gt-ico svg":
    {
      fill: `${props.theme.colors.gitalk.linkColor} !important`,
    },

  ".gt-container .gt-comment-username, .gt-container .gt-header-controls-tip, .gt-container .gt-link .gt-link-counts":
    {
      color: `${props.theme.colors.gitalk.linkColor} !important`,
    },
}));

export default Comments;
