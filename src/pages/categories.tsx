import React, { FC, useState } from "react";
import { graphql, HeadFC, Link } from "gatsby";
import styled from "@emotion/styled";

import CategoriesList from "@components/left-pane/categories-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";
import slugify from "slugify";
import SEO from "@components/seo";

const CategoriesPage: FC<{
  data: GatsbyTypes.CategoriesPageDataQuery;
  location: Location;
}> = props => {
  const [shouldDisplayShadow, setShouldDisplayShadow] =
    useState<boolean>(false);

  return (
    <ContentContainer title="Categories" displayShadow={shouldDisplayShadow}>
      <CategoryWrapper
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        {props.data.allMdx.group.map(group => {
          return (
            <React.Fragment key={group.fieldValue}>
              <CategoryGroup>
                <h2>{group.fieldValue!}</h2>
                <Link
                  to={`/categories/${slugify(
                    group.fieldValue!
                  ).toLocaleLowerCase()}`}
                >
                  All articles in the category
                </Link>
              </CategoryGroup>
              {group.nodes.slice(0, 3).map(node => (
                <ArticleListItem
                  id={node.id}
                  key={node.id}
                  slug={node.fields?.slug!}
                  title={node.frontmatter?.title!}
                  date={node.frontmatter?.date!}
                  timeToRead={node.fields?.readingTime?.text!}
                  tags={node.frontmatter?.tags}
                />
              ))}
            </React.Fragment>
          );
        })}
      </CategoryWrapper>
    </ContentContainer>
  );
};

export const query = graphql`
  query CategoriesPageData {
    site {
      siteMetadata {
        title
        author
        description
        keywords
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: { frontmatter: { categories: SELECT } }) {
        fieldValue
        nodes {
          id
          fields {
            slug
            readingTime {
              text
              minutes
              time
            }
          }
          frontmatter {
            date
            title
            tags
          }
        }
      }
    }
  }
`;

const CategoryWrapper = styled.div({
  maxHeight: "calc(100vh - 61px)",
  overflow: "auto",
  marginTop: 18,
});

const CategoryGroup = styled.div(props => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 18,
  marginBottom: 6,
  margin: "0 18px 0 0",

  "& h2": {
    margin: "0 0 0 18px",
  },

  "& a": {
    color: props.theme.colors.linkColor,
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
}));

(CategoriesPage as any).Aside = CategoriesList;

export default CategoriesPage;

export const Head: HeadFC<GatsbyTypes.CategoriesPageDataQuery> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  return (
    <SEO
      title={`Categories | ${siteMetadata.title}` || ""}
      author={siteMetadata.author || ""}
      keywords={props.data.allMdx.group
        .map(group => group.fieldValue!)
        .join(", ")}
      description={`Categories | ${siteMetadata.title}` || ""}
    />
  );
};
