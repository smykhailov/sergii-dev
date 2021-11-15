import React, { FC, MouseEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Link, navigate } from "gatsby";
import slugify from "slugify";
import { formatDate } from "@core/date";

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
    let cancel = false;
    const getCommentsCount = async () => {
      const encodedSlug = encodeURIComponent(props.slug);
      const url = `https://api.github.com/search/issues?q=%22Gitalk_${encodedSlug}%22+type:issue+in:body+label:Gitalk+repo:smykhailov%2Fsergii-dev&t=${Date.now()}`;

      if (cancel) {
        return;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (cancel) {
        return;
      }

      if (data?.items) {
        setCommentsCount(data?.items[0]?.comments || 0);
      }
    };

    getCommentsCount()
      .then(() => console.debug("Comments count received"))
      .catch(err => console.error("Cannot get comments count", err));

    return () => {
      cancel = true;
    };
  }, [props.slug]);

  return (
    <ArticleItemContainer key={props.id}>
      <ItemButton to={props.slug}>
        <ArticleItemHeader>
          <h3>{props.title}</h3>
        </ArticleItemHeader>
        <ArticleItemBody>
          {props.tags?.map(tag => (
            <Link
              key={tag}
              to={`/tags/${slugify(tag as string).toLocaleLowerCase()}`}
            >{`#${tag}`}</Link>
          ))}
        </ArticleItemBody>
        <ArticleItemFooter>
          <div>
            <span>
              {formatDate(props.date)} - <em>{props.timeToRead}</em>
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
      </ItemButton>
    </ArticleItemContainer>
  );
};

const ItemButton: FC<{ to: string }> = props => {
  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(props.to);
  };

  return <div onClick={onClickHandler}>{props.children}</div>;
};

const ArticleItemContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  margin: "9px 0",
  padding: "12px",
  backgroundColor: props.theme.colors.main.titleContainerBackgroundColor,

  ":hover": {
    backgroundColor: props.theme.colors.main.backgroundHoverColor,
    cursor: "pointer",
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
