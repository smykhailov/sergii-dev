const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const slugify = require("slugify");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    // .substring(12) - removes date from slug
    // 2020-10-24-first -> first
    const value = createFilePath({ node, getNode }).substring(12);

    createNodeField({
      name: "slug",
      node,
      value: `/article/${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query AllMdx {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `/categories/${slugify(
        node.frontmatter.category
      ).toLocaleLowerCase()}`,
      component: path.resolve("./src/components/category.tsx"),
      context: {
        category: node.frontmatter.category,
      },
    });

    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/article.tsx"),
      // context: { slug: article.fields.slug },
      context: { id: node.id },
    });
  });
};
