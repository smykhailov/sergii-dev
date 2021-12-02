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
    textDecoration: "none",
    borderBottom: "none",
  },

  ".gt-container .gt-popup": {
    backgroundColor: props.theme.colors.gitalk.popupBackgroundColor,
    border: "none",
    padding: 0,
    fontSize: props.theme.fontSize,
  },
  ".gt-container .gt-popup .gt-action.is--active:before": {
    backgroundColor: props.theme.colors.linkColor,
    top: "0.8em",
  },
  ".gt-container .gt-popup .gt-action.text": {
    color: props.theme.colors.textActiveColor,
  },

  ".gt-container .gt-copyright": {
    borderTop: "none",
    paddingTop: 0,
    margin: 0,
    padding: "0 1.125em 0",
    marginBottom: "0.5em",
  },
  ".gt-container .gt-copyright:hover, .gt-container .gt-action:hover": {
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
  ".gt-container .gt-comment-username:hover,  .gt-container .gt-link:hover": {
    textDecoration: "none",
  },

  ".gt-container .gt-link, .gt-container .gt-comment-reply svg, .gt-container .gt-comment-like svg, .gt-container .gt-header-controls-tip svg, .gt-container .gt-user .gt-ico svg":
    {
      fill: `${props.theme.colors.gitalk.linkColor} !important`,
    },
  ".gt-container a, .gt-container .gt-comment-username, .gt-container .gt-header-controls-tip, .gt-container .gt-link-counts":
    {
      color: `${props.theme.colors.gitalk.linkColor} !important`,
    },
  ".gt-container .gt-btn": {
    color: props.theme.colors.gitalk.btnTextColor,
    backgroundColor: props.theme.colors.gitalk.btnBackgroundColor,
    display: "inline-block",
    padding: "2px 14px",
    borderRadius: 0,
    border: 0,
    lineHeight: "inherit",
  },
  ".gt-container .gt-btn:hover": {
    backgroundColor: props.theme.colors.gitalk.btnTextHoverColor,
  },
  ".gt-container .gt-header-textarea, .gt-container .gt-header-preview": {
    color: props.theme.colors.textColor,
    backgroundColor: props.theme.colors.backgroundSecondary,
    borderRadius: 0,
    padding: 4,
    transition: "none",
    border: "none",
  },
  ".gt-container .gt-header-textarea:hover, .gt-container .gt-header-preview:hover":
    {
      color: props.theme.colors.textColor,
      backgroundColor: props.theme.colors.backgroundSecondary,
    },
  ".gt-container .gt-header-textarea:focus": {
    border: props.theme.colors.focusOutline,
  },
  ".gt-container .gt-error": {
    textAlign: "left",
  },
}));

export default Comments;
