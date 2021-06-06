exports.githubApiQuery = `
query {
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
