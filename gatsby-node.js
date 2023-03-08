const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const slugify = require("slugify");
const readingTime = require(`reading-time`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === "Mdx" &&
    node.internal.contentFilePath.includes("/articles/")
  ) {
    // .substring(12) - removes date from slug
    // 2020-10-24-first -> first
    const value = createFilePath({ node, getNode }).substring(12);

    createNodeField({
      node,
      name: "slug",
      value: `/articles/${value}`,
    });

    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.body),
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const articlePage = path.resolve("./src/components/article.tsx");
  const tagPage = path.resolve("./src/components/tag.tsx");
  const categoryPage = path.resolve("./src/components/category.tsx");
  const projectPage = path.resolve("./src/components/project.tsx");

  const mdxResult = await graphql(`
    query AllMdx {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              categories
              tags
            }
            fields {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  const projectResult = await graphql(`
    query GitHubProjects {
      allGithubData {
        edges {
          node {
            data {
              search {
                edges {
                  node {
                    name
                    createdAt
                    description
                    url
                    homepageUrl
                    object {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (mdxResult.errors || projectResult.errors) {
    console.error(mdxResult.errors);
    console.error(projectResult.errors);
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const tagSet = new Set();
  const categorySet = new Set();

  // Create blog post pages.
  const articles = mdxResult.data.allMdx.edges;

  articles.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    if (node.frontmatter.categories) {
      node.frontmatter.categories.forEach(category => {
        categorySet.add(category);
      });
    }

    if (!node?.fields?.slug) {
      return;
    }

    createPage({
      path: node.fields.slug,
      component: `${articlePage}?__contentFilePath=${node.internal.contentFilePath}}`,
      context: { id: node.id },
    });

    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag).toLocaleLowerCase()}`,
        component: tagPage,
        context: {
          tag,
        },
      });
    });

    categorySet.forEach(category => {
      createPage({
        path: `/categories/${slugify(category).toLocaleLowerCase()}`,
        component: categoryPage,
        context: {
          category,
        },
      });
    });
  });

  const projects =
    projectResult.data.allGithubData.edges[0].node.data.search.edges;

  projects.forEach(({ node }) => {
    createPage({
      path: `/projects/${slugify(node.name).toLocaleLowerCase()}`,
      component: projectPage,
      context: { data: node },
    });
  });
};
