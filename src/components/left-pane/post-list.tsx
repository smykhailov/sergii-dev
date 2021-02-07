import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const PostList: FC<{}> = () => {
  const { nodes } = usePostListQuery();

  return (
    <div>
      <ul>
        {nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <li key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{new Date(frontmatter.date).toLocaleDateString()}</p>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

type TData = {
  allMdx: {
    nodes: Array<{
      id: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
      fields: {
        slug: string;
      };
    }>;
  };
};

export const usePostListQuery = () => {
  const { allMdx } = useStaticQuery<TData>(graphql`
    query PostListQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          slug
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return allMdx;
};

export default PostList;
