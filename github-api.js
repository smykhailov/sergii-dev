exports.githubProjectsQuery = `
query GithubProjects {
  search(query: "is:public user:smykhailov", type: REPOSITORY, first: 50) {
    repositoryCount
    pageInfo {
      endCursor
      startCursor
    }
    edges {
      node {
        ... on Repository {
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
