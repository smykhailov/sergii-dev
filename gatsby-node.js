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
      value: `/articles/${value.replace("/", "")}.html`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postPage = path.resolve("./src/components/article.tsx");
  const tagPage = path.resolve("./src/components/tag.tsx");
  const categoryPage = path.resolve("./src/components/category.tsx");

  const result = await graphql(`
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
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const tagSet = new Set();
  const categorySet = new Set();

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  posts.forEach(({ node, index }) => {
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

    createPage({
      path: node.fields.slug,
      component: postPage,
      // context: { slug: article.fields.slug },
      context: { id: node.id },
    });

    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag).toLocaleLowerCase()}.html`,
        component: tagPage,
        context: {
          tag,
        },
      });
    });

    categorySet.forEach(category => {
      createPage({
        path: `/categories/${slugify(category).toLocaleLowerCase()}.html`,
        component: categoryPage,
        context: {
          category,
        },
      });
    });
  });
};
