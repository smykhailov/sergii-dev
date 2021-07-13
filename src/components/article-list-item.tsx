import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";
import slugify from "slugify";

const ArticleListItem: FC<{
  id: string;
  slug: string;
  title: string;
  date: string;
  timeToRead: string;
  tags?: GatsbyTypes.Maybe<readonly GatsbyTypes.Maybe<string>[]>;
}> = props => {
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    const encodedSlug = encodeURIComponent(props.slug);
    const url = `https://api.github.com/search/issues?q=%22Gitalk_${encodedSlug}%22+type:issue+in:body+label:Gitalk+repo:smykhailov%2Fsergii-dev&t=${Date.now()}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data || data.items === undefined || data.items.length === 0) {
          setCommentsCount(0);
        } else {
          setCommentsCount(data?.items[0]?.comments || 0);
        }
      });
  });

  return (
    <ArticleItemContainer key={props.id}>
      <Link key={props.slug} to={props.slug}>
        <ArticleItemHeader>
          <h3>{props.title}</h3>
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
            <span>
              {new Date(props.date).toLocaleDateString()} - {props.timeToRead}
            </span>
          </div>
          <div>
            <a href="/">
              {commentsCount === 1
                ? `${commentsCount} comment`
                : `${commentsCount} comments`}
            </a>
          </div>
        </ArticleItemFooter>
      </Link>
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

const ArticleItemHeader = styled.div(props => ({
  display: "flex",

  "& h3": {
    margin: 0,
    color: props.theme.colors.textActiveColor,
    opacity: 0.85,
  },

  "& h3:hover": {
    opacity: 1,
  },
}));

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

const ArticleItemFooter = styled.div(props => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
  color: props.theme.colors.textActiveColor,
}));

export default ArticleListItem;
