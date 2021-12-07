import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import Layout from "@components/layout";
import TagsList from "@components/left-pane/tags-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";

const TagsPage: FC<{
  data: GatsbyTypes.CategoriesPageDataQuery;
  location: Location;
}> = props => {
  return (
    <Layout
      aside={<TagsList location={props.location} />}
      location={props.location}
    >
      <ContentContainer title="Tags">
        {props.data.allMdx.group.map(group => {
          return (
            <React.Fragment key={group.fieldValue}>
              <TagsGroup>
                <h2>#{group.fieldValue!}</h2>
              </TagsGroup>
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
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query TagsPageData {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___tags) {
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

const TagsGroup = styled.div({
  marginTop: 18,
  marginBottom: 6,

  "& h2": {
    margin: 0,
  },
});

export default TagsPage;
