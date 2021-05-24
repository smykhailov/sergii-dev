import React, { FC } from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";
import slugify from "slugify";

const ArticleListItem: FC<{
  id: string;
  slug: string;
  title: string;
  date: string;
  tags?: GatsbyTypes.Maybe<readonly GatsbyTypes.Maybe<string>[]>;
}> = props => {
  return (
    <ArticleItemContainer key={props.id}>
      <ArticleItemHeader>
        <Link key={props.slug} to={props.slug}>
          <h3>{props.title}</h3>
        </Link>
      </ArticleItemHeader>
      <ArticleItemBody>
        {props.tags?.map(tag => (
          <Link
            to={`/tags/${slugify(tag as string).toLocaleLowerCase()}`}
          >{`#${tag}`}</Link>
        ))}
      </ArticleItemBody>
      <ArticleItemFooter>
        <div>
          <span>{new Date(props.date).toLocaleDateString()} - 10 min read</span>
        </div>
        <div>
          <a href="/">78 Comments</a>
        </div>
      </ArticleItemFooter>
    </ArticleItemContainer>
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

const ArticleItemHeader = styled.div({
  display: "flex",

  "& h3": {
    margin: 0,
  },

  "& a": {
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
});

const ArticleItemBody = styled.div({
  display: "flex",
  margin: "12px 0",

  "& a": {
    marginRight: 12,
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
});

const ArticleItemFooter = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
});

export default ArticleListItem;
