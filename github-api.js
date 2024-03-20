exports.githubProjectsQuery = `
query GithubProjects {
  repositoryOwner(login: "smykhailov") {
    repositories(
      first: 50
      ownerAffiliations: OWNER
      visibility: PUBLIC
      isFork: false
      orderBy: {field: UPDATED_AT, direction: DESC}
    ) {
      edges {
        node {
          name
          createdAt
          description
          url
          homepageUrl
          object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
}
`;

// exports.githubCommentsQuery = `
// query CommentsCount {
//   comments: search(
//     first: 100
//     type: ISSUE
//     query: "https://sergii.dev/articles/ state:open repo:smykhailov/sergii-dev"
//   ) {
//     issueCount
//     pageInfo {
//       hasNextPage
//       endCursor
//     }
//     edges {
//       node {
//         ... on Issue {
//           body
//           comments {
//             totalCount
//           }
//         }
//       }
//     }
//   }
// }
// `;
