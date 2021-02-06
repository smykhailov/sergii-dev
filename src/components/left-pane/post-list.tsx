import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

const PostList: FC<{}> = () => {
  const { nodes } = usePostListQuery();

  return (
    <div>
      <ul>
        {nodes.map(({ excerpt, frontmatter }: any) => (
          <li>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const usePostListQuery = () => {
  const { allMdx } = useStaticQuery(graphql`
    query PostListQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);

  return allMdx;
};

export default PostList;
