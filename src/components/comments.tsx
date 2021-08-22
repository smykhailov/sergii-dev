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
    color: `${props.theme.colors.gitalk.beakColor} !important`,
    textDecoration: "none",
    borderBottom: "none",
  },

  ".gt-container .gt-popup": {
    backgroundColor: "rgb(29, 31, 35)",
    border: "none",
    color: "rgb(204, 204, 204)",
    padding: 0,
    fontSize: "13px",
  },

  ".gt-container .gt-action:hover": {
    backgroundColor: "rgb(44, 49, 58)",
  },

  ".gt-container .gt-copyright": {
    borderTop: "none",
    paddingTop: 0,
    padding: "0 0.9375em 0",
    marginBottom: "0.5em",
  },

  ".gt-container .gt-copyright:hover": {
    backgroundColor: "rgb(44, 49, 58)",
  },

  ".gt-container .gt-link .gt-link-counts": {
    color: `${props.theme.colors.gitalk.beakColor} !important`,
  },

  ".gt-container .gt-user .gt-ico svg": {
    fill: props.theme.colors.gitalk.beakColor,
  },

  ".gt-container .gt-comment-content": {
    padding: 0,
  },

  ".gt-container .gt-comment-content:hover": {
    boxShadow: "none",
  },

  ".gt-container .gt-comment-username": {
    color: `${props.theme.colors.gitalk.beakColor} !important`,
  },

  ".gt-container .gt-comment-admin .gt-comment-content": {
    backgroundColor: "transparent",
  },

  ".gt-container .gt-comment-body": {
    color: `${props.theme.colors.textActiveColor} !important`,
  },

  ".gt-container .gt-comment-reply svg": {
    fill: `${props.theme.colors.gitalk.beakColor} !important`,
  },

  ".gt-container .gt-header-controls-tip svg": {
    fill: `${props.theme.colors.gitalk.beakColor} !important`,
  },

  ".gt-container .gt-header-controls-tip": {
    color: `${props.theme.colors.gitalk.beakColor} !important`,
  },
}));

export default Comments;
